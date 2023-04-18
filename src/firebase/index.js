import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlueC2BPGh50et892hc17RtqyT4q4JxFk",
  authDomain: "dole-qr-attendance-system.firebaseapp.com",
  projectId: "dole-qr-attendance-system",
  storageBucket: "dole-qr-attendance-system.appspot.com",
  messagingSenderId: "729857640359",
  appId: "1:729857640359:web:f0e372cb85813ac4d75882",
  measurementId: "G-LPCTNHSV6J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}