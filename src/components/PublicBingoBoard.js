// src/components/PublicBingoBoard.js
import React, { useEffect, useState } from "react";
import { fetchBingoCard } from "../utils/fetchBingoData";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import "./BingoBoard.css";

const PublicBingoBoard = ({ cardID, gridSize }) => {
  const [board, setBoard] = useState([]);
  const [markedCells, setMarkedCells] = useState(new Set());

  // Load board data from Google Sheets (or fallback)
  useEffect(() => {
    const loadBoard = async () => {
      const data = await fetchBingoCard(cardID, gridSize);
      if (data) {
        setBoard(data);
      } else {
        setBoard(Array.from({ length: gridSize * gridSize }, (_, i) => i + 1));
      }
    };
    loadBoard();
  }, [cardID, gridSize]);

  // Set up a real-time Firestore listener on the document for this card.
  useEffect(() => {
    const docRef = doc(db, "bingoCards", cardID);
    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.markedCells) {
            setMarkedCells(new Set(data.markedCells));
          } else {
            setMarkedCells(new Set());
          }
        }
      },
      (error) => {
        console.error("Error in onSnapshot:", error);
      }
    );
    return () => unsubscribe();
  }, [cardID]);

  return (
    <div className="bingo-container">
      <h2>Bingo Showdown Bash <br/>Card ID: {cardID}</h2>
      <div className="board-grid" style={{ gridTemplateColumns: `repeat(${gridSize}, 100px)` }}>
        {board.map((cell, index) => {
          const isMarked = markedCells.has(index);
          return (
            <div
              key={index}
              className={`bingo-cell ${isMarked ? "winning-cell" : "public-cell"}`}
            >
              {cell}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PublicBingoBoard;
