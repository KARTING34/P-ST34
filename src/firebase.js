// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "BURAYA-YAPISTIR",
  authDomain: "BURAYA-YAPISTIR",
  projectId: "BURAYA-YAPISTIR",
  storageBucket: "BURAYA-YAPISTIR",
  messagingSenderId: "BURAYA-YAPISTIR",
  appId: "BURAYA-YAPISTIR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
