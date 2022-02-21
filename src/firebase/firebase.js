
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6GLVj6Xo6gR4IKlOQG3XOf2-zt2PANnc",
  authDomain: "aloha-grocery.firebaseapp.com",
  projectId: "aloha-grocery",
  storageBucket: "aloha-grocery.appspot.com",
  messagingSenderId: "658997853012",
  appId: "1:658997853012:web:bef5e476170e724d8466c1",
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const auth = getAuth(firebaseApp);

export const storage = getStorage(firebaseApp);
