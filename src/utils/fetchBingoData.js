import axios from "axios";

// Replace these with your actual Google Sheets details.
const SHEET_ID = "1-KQnkPAZfYFkrqw9TEJYgJDjjL1Zr9rMifdOFcHvRjA";
const API_KEY = "AIzaSyBukjxYMUNnHWRVWus4FaB3pVhR55llUtI";
// Function to determine the range based on grid size.
const getSheetRange = (gridSize) => {
  if (gridSize === 3) return "cards3.db!A2:J";
  if (gridSize === 4) return "cards4.db!A2:Q";
  if (gridSize === 5) return "cards5.db!A2:Z";
  return "";
};

// ----------------------------------------------------------------------
// Translations Dictionary
// ----------------------------------------------------------------------
export const translationsDictionary = {
  accuracy: "Accuracy",
  high_combo_wins: "Max Combo",
  low_score_loses: "Low Score Loses",
  misscount: "Misscount",
  score_v2: "ScoreV2",
};

/**
 * Automatically translates a given text value using the translations dictionary.
 * If a matching key is found, the translated value is returned; otherwise, the original value is returned.
 *
 * @param {string} value - The text value to translate.
 * @returns {string} - The translated text.
 */
const autoTranslate = (value) => {
  return translationsDictionary[value] || value;
};

/**
 * Fetches a bingo card row from the Google Sheet based on the provided cardID and gridSize.
 * The returned array contains grid values that are automatically translated.
 */
export const fetchBingoCard = async (cardID, gridSize) => {
  const range = getSheetRange(gridSize);
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  try {
    const response = await axios.get(url);
    const rows = response.data.values;
    // Find the row that matches the given card ID (assumed to be in the first column)
    const cardRow = rows.find((row) => row[0] === cardID);
    if (!cardRow) return null;
    // Remove the card ID (first cell) and translate the rest of the grid values.
    const gridData = cardRow.slice(1).map(autoTranslate);
    return gridData;
  } catch (error) {
    console.error("Error fetching bingo data:", error);
    return null;
  }
};