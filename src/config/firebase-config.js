// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAsAx-G4D7XAUX_W7ssPUWOaC5pRreFPkU",
  authDomain: "codersmonkeys-b4676.firebaseapp.com",
  projectId: "codersmonkeys-b4676",
  storageBucket: "codersmonkeys-b4676.firebasestorage.app",
  messagingSenderId: "524841344253",
  appId: "1:524841344253:web:2db010b9de0fd0263b3294",
  measurementId: "G-TSNRG881TG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//  const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);