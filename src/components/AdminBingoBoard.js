// src/components/AdminBingoBoard.js
import React, { useEffect, useState } from "react";
import { fetchBingoCard } from "../utils/fetchBingoData";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./BingoBoard.css";

const AdminBingoBoard = ({ cardID, gridSize }) => {
  const [board, setBoard] = useState([]);
  const [markedCells, setMarkedCells] = useState(new Set());

  // Load board data and existing marked cells from Firestore (if any)
  useEffect(() => {
    const loadBoard = async () => {
      const data = await fetchBingoCard(cardID, gridSize);
      if (data) {
        setBoard(data);
      } else {
        setBoard(Array.from({ length: gridSize * gridSize }, (_, i) => i + 1));
      }
      // Load existing marked cells from Firestore
      const docRef = doc(db, "bingoCards", cardID);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const docData = docSnap.data();
        if (docData.markedCells) {
          setMarkedCells(new Set(docData.markedCells));
        }
      }
    };
    loadBoard();
  }, [cardID, gridSize]);

  // Handle clicking a cell: toggle its marked state and update Firestore.
  const handleCellClick = async (index) => {
    const newSet = new Set(markedCells);
    if (newSet.has(index)) {
      newSet.delete(index);
    } else {
      newSet.add(index);
    }
    setMarkedCells(newSet);

    // Write the new markedCells state to Firestore (merging with any existing data).
    const docRef = doc(db, "bingoCards", cardID);
    await setDoc(docRef, { markedCells: Array.from(newSet) }, { merge: true });
  };

  return (
    <div className="bingo-container">
      <h2>Admin Panel - Card ID: {cardID}</h2>
      <div className="board-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}>
        {board.map((cell, index) => {
          const isMarked = markedCells.has(index);
          return (
            <div
              key={index}
              className={`bingo-cell admin-cell ${isMarked ? "marked" : ""}`}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminBingoBoard;
