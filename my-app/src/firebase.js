// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDagnvQJVH3fEkiUxKTXvyC89fGg-7qJRM",
  authDomain: "westan-cs278.firebaseapp.com",
  databaseURL: "https://westan-cs278-default-rtdb.firebaseio.com",
  projectId: "westan-cs278",
  storageBucket: "westan-cs278.appspot.com",
  messagingSenderId: "1046957520095",
  appId: "1:1046957520095:web:9993c67e1a3fc07f5ba56a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;