// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBssmyvDioKYOHdl-RAHWdfGRAGkkODnEw",
  authDomain: "mapa-teste-75aca.firebaseapp.com",
  projectId: "mapa-teste-75aca",
  storageBucket: "mapa-teste-75aca.firebasestorage.app",
  messagingSenderId: "819639718364",
  appId: "1:819639718364:web:4913ce205910e26de03f19",
  measurementId: "G-9CDZJCWPF2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
