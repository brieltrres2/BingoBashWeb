// src/components/MapTablePage.js
import React from "react";
import MapTable from "./MapTable";

function MapTablePage() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Maps Overview</h1>
      <p>Here is a list of all the maps:</p><br></br><br></br><br></br><br></br><br></br>
      <h2>Scrimmages Mappool</h2>
      <MapTable />
    </div>
  );
}

export default MapTablePage;
