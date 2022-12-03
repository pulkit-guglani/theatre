// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLN_u9bmi_7cZrE0Lar0SKMo1lmOl1RUA",
  authDomain: "theatre-436ca.firebaseapp.com",
  projectId: "theatre-436ca",
  storageBucket: "theatre-436ca.appspot.com",
  messagingSenderId: "357955426302",
  appId: "1:357955426302:web:e8d4eac82fb83e189552af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
