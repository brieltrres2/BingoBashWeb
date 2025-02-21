// src/components/Home.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [cardID, setCardID] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (viewType) => {
    if (cardID.trim() === "") {
      alert("Please enter a card ID");
      return;
    }
    // Navigate to the appropriate route based on viewType.
    if (viewType === "public") {
      navigate(`/public/${cardID}`);
    } else if (viewType === "admin") {
      navigate(`/admin/${cardID}`);
    }
  };

  return (
    <div style={{ textAlign: "center", margin: 30 }}>
      <h1>Bingo Bash Card Display</h1>
      <input
  type="text"
  value={cardID}
  onChange={(e) => setCardID(e.target.value)}
  placeholder="Enter card ID"
  style={{
    fontFamily: "Lexend, serif",
    fontOpticalSizing: "auto",
    fontWeight: 200,
    fontStyle: "normal",
    fontSize: "16px",
    padding: "8px",
    background: "linear-gradient(to right, #8da1b9, #ffb4b4, #95adb6)",
    border: "5px inset rgb(197, 197, 197)", // optional border styling
    borderRadius: "4px", // optional, for rounded corners
    color: "#fff" // ensures text is readable on the gradient
  }}
  />

      <div style={{ fontFamily: "Lexend, serif", marginTop: "20px" }}>
        <button
          onClick={() => handleSubmit("public")}
          style={{fontFamily: "Lexend, serif", marginRight: "10px", padding: "10px 20px" }}
        >
          Public View
        </button>
        <button onClick={() => handleSubmit("admin")} style={{fontFamily: "Lexend, serif", padding: "10px 20px" }}>
          Admin View
        </button>
      </div>
    </div>
  );
};

export default Home;
