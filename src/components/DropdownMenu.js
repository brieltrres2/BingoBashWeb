// src/components/DropdownMenu.js
import React, { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const placeholderLinks = [
    { title: "Bingo Card Display", url: "/" },
    { title: "Teams", url: "/teamsdisplay" },
    { title: "Mappools", url: "/maps" },
    { title: "Bracket & Schedule", url: "brackets" },
    { title: "Qualifiers Schedule", url: "qualifiers" },
    { title: "Rules & Info", url: "documentation" },
   // { title: "Placeholder Link 7", url: "#" },
   // { title: "Placeholder Link 8", url: "#" },
   // { title: "Placeholder Link 9", url: "#" },
   // { title: "Placeholder Link 10", url: "#" },
   // { title: "Placeholder Link 11", url: "#" },
   // { title: "Placeholder Link 12", url: "#" },
   // { title: "Placeholder Link 13", url: "#" },
   // { title: "Placeholder Link 14", url: "#" },
   // { title: "Placeholder Link 15", url: "#" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Define arrow inline style with transition
  const arrowStyle = {
    display: "inline-block",
    transition: "transform 0.3s ease",
    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
    marginRight: "5px",
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={toggleMenu}
        style={{
          fontFamily: "Lexend, serif",
          padding: "10px 20px",
          background: "transparent",
          border: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        <span style={arrowStyle}>▶</span> Menu
      </button>
      {isOpen && (
        <ul
          style={{
            textAlign: "middle",
            position: "static",
            top: "100%",
            left: 0,
            right: 0,
            margin: 0,
            padding: "10px",
            listStyle: "none",
            border: "none",
            zIndex: 100,
            minWidth: "300px"
          }}
        >
          {placeholderLinks.map((link, index) => (
            <li
              key={index}
              style={{
                margin: "5px 0",
                padding: "10px",
                animation: "fadeInCascade 0.1s ease forwards",
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <a
                href={link.url}
                style={{
                  textDecoration: "none",
                  color: "#333",
                  opacity: 0, // start transparent
                  animation: "fadeInLink 0.3s ease forwards",
                  animationDelay: `${index * 0.1 + 0.1}s`, // delay after cascade animation
                }}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;