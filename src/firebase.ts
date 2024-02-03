// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAArzOW9Fy3duTo36tZvnMxMkvlvhuBpz8",
  authDomain: "twitter-clone-12533.firebaseapp.com",
  projectId: "twitter-clone-12533",
  storageBucket: "twitter-clone-12533.appspot.com",
  messagingSenderId: "592697292080",
  appId: "1:592697292080:web:96aae48dfe196b3b2584f5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);