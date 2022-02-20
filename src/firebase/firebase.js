// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6GLVj6Xo6gR4IKlOQG3XOf2-zt2PANnc",
  authDomain: "aloha-grocery.firebaseapp.com",
  projectId: "aloha-grocery",
  storageBucket: "aloha-grocery.appspot.com",
  messagingSenderId: "658997853012",
  appId: "1:658997853012:web:bef5e476170e724d8466c1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);
