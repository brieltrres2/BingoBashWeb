// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyAKFW_sTqfLpXqW7r2auK8sxwoqG_3p-DM",
    authDomain: "bingosb25.firebaseapp.com",
    projectId: "bingosb25",
    storageBucket: "bingosb25.firebasestorage.app",
    messagingSenderId: "706987926208",
    appId: "1:706987926208:web:78a44dea041b74c0f0c325",
    measurementId: "G-NPJWBFLKBC"
  
  };
  
  

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

export { db };
export default app;
