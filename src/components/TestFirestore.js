// src/components/TestFirestore.js
import React, { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";



const TestFirestore = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "bingoCards", "TEST_CARD_ID"); // Replace with a valid document ID
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Test document data:", docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching test document:", error);
      }
    };
    fetchData();
  }, []);

  return <div>Check your console for Firestore test output.</div>;
};

export default TestFirestore;
