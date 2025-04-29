// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBtBOMziuDD4vJ9TxkSXNIpk5yBPQgjMuU",
  authDomain: "istanbulkartingpark.firebaseapp.com",
  projectId: "istanbulkartingpark",
  storageBucket: "istanbulkartingpark.firebasestorage.app",
  messagingSenderId: "862947501396",
  appId: "1:862947501396:web:ed31c8ae6265064b4454c1",
  measurementId: "G-YEDXC2G1E1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
