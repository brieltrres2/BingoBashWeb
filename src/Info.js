// src/components/Info.js
import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import DropdownMenu from "./components/DropdownMenu";

const buttonStyle = {
  display: "grid",
  gridTemplateColumns: "auto 1fr",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#039be5",
  color: "white",
  textDecoration: "none",
  borderRadius: "4px",
  width: "250px",
  textAlign: "center",
};

const imgStyle = {
  width: "80px",
  height: "80px",
  marginRight: "10px",
};

const imgContainerStyle = {
  justifySelf: "start",
};

const textContainerStyle = {
  textAlign: "center",
};

const Info = () => {
  return (
    // Set position: relative so that our absolute dropdown is positioned relative to this container.
    <div className="home-container" style={{ padding: "20px", textAlign: "center", position: "relative" }}>
      
      {/* Dropdown menu positioned at the top right corner */}
      <div style={{ position: "absolute", top: "10px", right: "10px", zIndex: 1000 }}>
        <DropdownMenu />
      </div>
      
      {/* Four separate text containers */}
      <div className="text-container" style={{ color: "#f7df1e", marginBottom: "250px" }}>
        <h1 className="typing-animation">Welcome to Bingo Bash Web!</h1>
      </div>
      <div className="text-container" style={{ color: "#89b8ff", animation: "fadeInUp 1s ease-out forwards", textDecoration: "underline", marginBottom: "50px" }}>
        <p>Follow our updates and join the Discord Server!</p>
      </div>
      <div className="text-container" style={{ color: "#89b8ff", animation: "fadeInUp 1.5s ease-out forwards", marginBottom: "260px" }}>
        <p>Explore our links below for more information.</p>
      </div>
      <div className="text-container" style={{ color:"rgba(132, 181, 255, 0.47)", animation: "fadeInUp 2s ease-out forwards", textDecoration: "underline", fontWeight: "70", marginBottom: "90px" }}>
        <p>▽ Scroll down for more links ▽</p>
      </div>

      {/* Link buttons */}
      <div
        className="button-container"
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        {/* Internal Link: Bingo Display Main Page */}
        <Link to="/" className="btn" style={buttonStyle}>
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/p3jtav.png"
              alt="Bingo Cards"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Bingo Cards Main Page</div>
        </Link>

        {/* External Link: Twitch Channel */}
        <a
          href="https://www.twitch.tv/bingobash25"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/e71q8z.png"
              alt="Twitch Channel"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Twitch Channel</div>
        </a>

        {/* External Link: Discord Server */}
        <a
          href="https://discord.gg/J5gFhMcbb3"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/n4728a.png"
              alt="Discord Server"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Discord Server</div>
        </a>

        {/* External Link: Challonge */}
        <a
          href="https://challonge.com/g79d6e4h"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/ze2w96.png"
              alt="Challonge"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Challonge</div>
        </a>

        {/* Internal Link: Rules Documentation */}
        <Link to="/documentation" className="btn" style={buttonStyle}>
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/sb0z9i.png"
              alt="Documentation"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Rules Documentation</div>
        </Link>

        {/* External Link: Mainsheet */}
        <a
          href="https://docs.google.com/spreadsheets/d/yourSheetId"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/sb0z9i.png"
              alt="Mainsheet"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Mainsheet</div>
        </a>

        {/* External Link: YouTube Channel */}
        <a
          href="https://youtube.com/yourChannel"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/zmsqhl.png"
              alt="YouTube Channel"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>YouTube Channel</div>
        </a>

        {/* External Link: Forum Post */}
        <a
          href="https://osu.ppy.sh/community/forums/yourForumPost"
          target="_blank"
          rel="noopener noreferrer"
          style={buttonStyle}
        >
          <div style={imgContainerStyle}>
            <img
              src="https://files.catbox.moe/h3xsoo.png"
              alt="Forum Post"
              style={imgStyle}
            />
          </div>
          <div style={textContainerStyle}>Forum Post</div>
        </a>
        <div className="text-container" style={{ color: "rgba(132, 181, 255, 0.15)", fontStyle: "italic", fontWeight: "70", marginTop: "90px", marginBottom: "90px" }}>
          <p>kami was here :p</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
