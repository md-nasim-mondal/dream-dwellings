// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwhpbCMMYysjmvm7IIRy2wofGFoyPc8jE",
  authDomain: "dreamdwellings-program.firebaseapp.com",
  projectId: "dreamdwellings-program",
  storageBucket: "dreamdwellings-program.appspot.com",
  messagingSenderId: "224519126057",
  appId: "1:224519126057:web:eda34a41387f8b9a33b038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;