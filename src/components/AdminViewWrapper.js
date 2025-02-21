// src/components/AdminViewWrapper.js
import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import AdminBingoBoard from "./AdminBingoBoard";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Read valid admin passwords from your .env file.
const validAdminPasswords = process.env.REACT_APP_ADMIN_PASSWORDS
  ? process.env.REACT_APP_ADMIN_PASSWORDS.split(",").map(p => p.trim())
  : [];

const getGridSizeFromCardId = (id) => {
  const valid3x3 = ["31", "32", "33", "34", "35", "36"];
  const valid4x4 = ["41", "42", "43", "44", "45", "46"];
  const valid5x5 = ["51", "52", "53"];
  if (valid3x3.includes(id)) return 3;
  if (valid4x4.includes(id)) return 4;
  if (valid5x5.includes(id)) return 5;
  return null;
};

const AdminViewWrapper = () => {
  const { cardID } = useParams();
  const gridSize = getGridSizeFromCardId(cardID);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [redirect, setRedirect] = useState(false);

  // Session key and expiration (70 minutes in milliseconds)
  const sessionKey = `adminSession_${cardID}`;
  const sessionDuration = 70 * 60 * 1000; // 70 minutes

  // Check for an existing session when the component mounts.
  useEffect(() => {
    const storedTimestamp = localStorage.getItem(sessionKey);
    if (storedTimestamp) {
      const now = Date.now();
      const sessionTimestamp = parseInt(storedTimestamp, 10);
      if (now - sessionTimestamp < sessionDuration) {
        setAuthenticated(true);
      } else {
        localStorage.removeItem(sessionKey);
      }
    }
  }, [cardID, sessionKey, sessionDuration]);

  // If gridSize is invalid, start a 2-second timer for redirect.
  useEffect(() => {
    if (!gridSize) {
      const timer = setTimeout(() => {
        setRedirect(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [gridSize]);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    if (validAdminPasswords.includes(password)) {
      setAuthenticated(true);
      localStorage.setItem(sessionKey, Date.now().toString());
      try {
        await addDoc(collection(db, "adminAccessLogs"), {
          cardID,
          passwordUsed: password,
          timestamp: new Date().toISOString(),
        });
        console.log("Admin access logged successfully.");
      } catch (err) {
        console.error("Error logging admin access:", err);
      }
    } else {
      setErrorMsg("Invalid password.");
    }
  };

  if (!gridSize) {
    if (redirect) return <Navigate to="/" replace />;
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        Error: Invalid Card ID. Redirecting...
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        <h2>Admin Panel - Card ID: {cardID}</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter admin password"
            style={{ fontSize: "16px", padding: "8px" }}
          />
          <button type="submit" style={{ marginLeft: "10px", padding: "8px 16px" }}>
            Submit
          </button>
        </form>
        {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}
      </div>
    );
  }

  return <AdminBingoBoard cardID={cardID} gridSize={gridSize} />;
};

export default AdminViewWrapper;
