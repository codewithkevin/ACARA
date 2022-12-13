// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAladKwtXZdkIveOmi7glkCbz09q_sIFhs",
  authDomain: "acara-5f8ac.firebaseapp.com",
  projectId: "acara-5f8ac",
  storageBucket: "acara-5f8ac.appspot.com",
  messagingSenderId: "321016357522",
  appId: "1:321016357522:web:ee46163cc80cfa0ab07c4b",
  measurementId: "G-KYTY56MQG2",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const storage = getStorage(app);
export const auth = getAuth();
export const db = getFirestore(app);
