// src/components/PublicViewWrapper.js
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import PublicBingoBoard from "./PublicBingoBoard";

const getGridSizeFromCardId = (id) => {
  const valid3x3 = ["31", "32", "33", "34", "35", "36"];
  const valid4x4 = ["41", "42", "43", "44", "45", "46"];
  const valid5x5 = ["51", "52", "53"];
  
  if (valid3x3.includes(id)) return 3;
  if (valid4x4.includes(id)) return 4;
  if (valid5x5.includes(id)) return 5;
  return null;
};

const PublicViewWrapper = () => {
  const { cardID } = useParams();
  console.log("Extracted cardID:", cardID);
  const gridSize = getGridSizeFromCardId(cardID);
  const [redirect, setRedirect] = useState(false);

  // If gridSize is invalid, start a 2-second timer for redirect.
  useEffect(() => {
    if (!gridSize) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gridSize]);

  if (!gridSize) {
    if (redirect) return <Navigate to="/" replace />;
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Error: Invalid Card ID. Redirecting...
      </div>
    );
  }
  
  return <PublicBingoBoard cardID={cardID} gridSize={gridSize} />;
};

export default PublicViewWrapper;
