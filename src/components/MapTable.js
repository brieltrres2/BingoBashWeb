// src/components/MapTable.js
import React from "react";
import "./MapTable.css"; // We'll create this CSS file in a moment

// Example row data - Replace or populate dynamically as needed
const sampleData = [
  {
    winCondition: "Accuracy",
    pickId: "ACC 1",
    mapId: 3903464,
    star: "★4.56",
    bannerUrl: "https://assets.ppy.sh/beatmaps/1889101/covers/cover.jpg", // Replace with actual banner URL
    artistTitleVersion: "II-L feat. amelie xoxo - THE EARTH [O K U's Insane]",
    bpm: 128,
    drainTime: "02:00",
    maxCombo: 833,
    cs: 4,
    ar: 8.2,
    od: 8,
    hp: 4,
  },
  {
    winCondition: "Accuracy",
    pickId: "ACC 2",
    mapId: 3811883,
    star: "★5.38",
    bannerUrl: "https://assets.ppy.sh/beatmaps/1854955/covers/cover.jpg", // Replace with actual banner URL
    artistTitleVersion: "E.G.G. - OK I'm blue rat [OK I'm extra]",
    bpm: 128,
    drainTime: "02:25",
    maxCombo: 922,
    cs: 4.5,
    ar: 7.5,
    od: 9.0,
    hp: 6.0,
  },
  {
    winCondition: "Accuracy",
    pickId: "ACC 3",
    mapId: 495864,
    star: "★6.57",
    bannerUrl: "https://assets.ppy.sh/beatmaps/1929702/covers/cover.jpg", // Replace with actual banner URL
    artistTitleVersion: "DJ SHARPNEL - CYBER INDUCTANCE [1.1x]",
    bpm: 210.1,
    drainTime: "04:22",
    maxCombo: 3185,
    cs: 4,
    ar: 9.4,
    od: 8.7,
    hp: 5.0,
  },
  {
    winCondition: "Misscount",
    pickId: "MC 1",
    mapId: 3894021,
    star: "★6.68",
    bannerUrl: "https://assets.ppy.sh/beatmaps/1570534/covers/cover.jpg",
    artistTitleVersion: "REDALiCE - DEAD or DIE [Rorupan's Extra]",
    bpm: 240,
    drainTime: "02:14",
    maxCombo: 1238,
    cs: 3.7,
    ar: 9.4,
    od: 8.5,
    hp: 5.0,
  },
  {
    winCondition: "Misscount",
    pickId: "MC 2",
    mapId: 408935,
    star: "★5.01",
    bannerUrl: "https://assets.ppy.sh/beatmaps/276223/covers/cover.jpg",
    artistTitleVersion: "Ice - L2 - Ascension : Act 2 (Liberation) [pishi's Insane 07/16]",
    bpm: 152,
    drainTime: "02:29",
    maxCombo: 1102,
    cs: 6.0,
    ar: 8.0,
    od: 8.0,
    hp: 6.0,
  },
  {
    winCondition: "Misscount",
    pickId: "MC 3",
    star: "★6.92",
    mapId: 4865429,
    bannerUrl: "https://assets.ppy.sh/beatmaps/2281914/covers/cover.jpg",
    artistTitleVersion: "Djerv - Rebel Heart [WATCH ARCANE]",
    bpm: 203,
    drainTime: "02:45",
    maxCombo: 1057,
    cs: 3.8,
    ar: 9.6,
    od: 9.6,
    hp: 5,
  },
  {
    winCondition: "Score V2",
    pickId: "SC 1",
    mapId: 1674139,
    star: "★7.23",
    bannerUrl: "https://assets.ppy.sh/beatmaps/727049/covers/cover.jpg",
    artistTitleVersion: "Getty vs. DJ DiA - DropZ-Line- [Sing's Master]",
    bpm: 200,
    drainTime: "2:12",
    maxCombo: 1175,
    cs: 4.5,
    ar: 9.6,
    od: 9.0,
    hp: 4.0,
  },
  {
    winCondition: "Score V2",
    pickId: "SC 2",
    star: "★6.19",
    mapId: 4652942,
    bannerUrl: "https://assets.ppy.sh/beatmaps/2198692/covers/cover.jpg",
    artistTitleVersion: "Kikuo - Oboreru Uchuu Neko [Sorry. Guess I'll cry about it.]",
    bpm: 120,
    drainTime: "03:53",
    maxCombo: 1488,
    cs: 4.5,
    ar: 9.0,
    od: 8.8,
    hp: 4.0,
  },
  {
    winCondition: "Score V2",
    pickId: "SC 3",
    mapId: 3362732,
    bannerUrl: "https://assets.ppy.sh/beatmaps/1643220/covers/cover.jpg",
    artistTitleVersion: "DJ Yoshitaka vs. DJ Mass MAD Izm* - Snake Stick [yf's EX]",
    star: "★6.39",
    bpm: 145,
    drainTime: "01:47",
    maxCombo: 1164,
    cs: 4.5,
    ar: 9.7,
    od: 8.6,
    hp: 6.5,
  },
  {
    winCondition: "Max Combo",
    pickId: "MxC 1",
    mapId: 4147967,
    bannerUrl: "https://assets.ppy.sh/beatmaps/1945081/covers/cover.jpg",
    artistTitleVersion: "ZUN - Touhou 7 Nonstop Medley [Perfect Cherry Blossom]",
    star: "★4.94",
    bpm: 156,
    drainTime: "21:02",
    maxCombo: 6982,
    cs: 4.0,
    ar: 8.0,
    od: 8.0,
    hp: 5.0,
  },
  {
    winCondition: "Max Combo",
    pickId: "MxC 2",
    mapId: 3844605,
    bannerUrl: "https://assets.ppy.sh/beatmaps/1411188/covers/cover.jpg",
    artistTitleVersion: "sakuraburst - SELF DESTRUCT [REMOTE]",
    star: "★6.24",
    bpm: 160,
    drainTime: "03:46",
    maxCombo: 1783,
    cs: 4.0,
    ar: 9.4,
    od: 9.0,
    hp: 6.0,
  },
  {
    winCondition: "Max Combo",
    pickId: "MxC 3",
    mapId: 3379930,
    bannerUrl: "https://assets.ppy.sh/beatmaps/1649315/covers/cover.jpg",
    artistTitleVersion: "Sheena Ringo - Yami ni Furu Ame [ScubDomino's Insane]",
    star: "★4.90",
    bpm: 130,
    drainTime: "03:21",
    maxCombo: 957,
    cs: 4.0,
    ar: 9.0,
    od: 8.0,
    hp: 5.0,
  },
  {
    winCondition: "Low Score Loses",
    pickId: "LS 1",
    mapId: 4405661,
    bannerUrl: "https://assets.ppy.sh/beatmaps/2100146/covers/cover.jpg",
    artistTitleVersion: "Solarbear - Pornogoblin (feat. Dr!p) [extra]",
    star: "★6.34",
    bpm: 197,
    drainTime: "02:46",
    maxCombo: 1090,
    cs: 4.0,
    ar: 9.0,
    od: 8.0,
    hp: 5.0,
  },
  {
    winCondition: "Low Score Loses",
    pickId: "LS 2",
    mapId: 2276017,
    bannerUrl: "https://assets.ppy.sh/beatmaps/1088528/covers/cover.jpg",
    artistTitleVersion: "Loki - With Fire and Sword (2013) [TheMinorsonek's Insane]",
    star: "★ 4.84",
    bpm: 180,
    drainTime: "03:52",
    maxCombo: 1662,
    cs: 3.8,
    ar: 9.0,
    od: 8.0,
    hp: 6.0,
  },
  {
    winCondition: "Low Score Loses",
    pickId: "LS 3",
    mapId: 4344441,
    bannerUrl: "https://assets.ppy.sh/beatmaps/2075262/covers/cover.jpg",
    artistTitleVersion: "Kabocha feat. Sennzai - Morphobia [Blue Wings]",
    star: "★ 6.82",
    bpm: 145,
    drainTime: "03:26",
    maxCombo: 1745,
    cs: 4.0,
    ar: 9.6,
    od: 9.0,
    hp: 5.0,
  },
  // ...Add more rows as needed
];

function MapTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Win Condition</th>
            <th>Pool</th>
            <th>Map ID</th>
            <th>Banner</th>
            <th>Artist / Title / Version</th>
            <th>★</th>
            <th>BPM</th>
            <th>Drain Time</th>
            <th>Max Combo</th>
            <th>CS</th>
            <th>AR</th>
            <th>OD</th>
            <th>HP</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row, idx) => (
            <tr key={idx}>
              <td>{row.winCondition}</td>
              <td>{row.pickId}</td>
              <td>{row.mapId}</td>
              <td>
                <img
                  src={row.bannerUrl}
                  alt="Banner"
                  style={{ maxWidth: "130px", height: "auto" }}
                />
              </td>
              <td>{row.artistTitleVersion}</td>
              <td>{row.star}</td>
              <td>{row.bpm}</td>
              <td>{row.drainTime}</td>
              <td>{row.maxCombo}</td>
              <td>{row.cs}</td>
              <td>{row.ar}</td>
              <td>{row.od}</td>
              <td>{row.hp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MapTable;
