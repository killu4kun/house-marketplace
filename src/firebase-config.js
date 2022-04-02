import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDypwDba3V-jDugGG76OFY7ZH3l7-JKDsc",
  authDomain: "house-marketplace-app-da0cd.firebaseapp.com",
  projectId: "house-marketplace-app-da0cd",
  storageBucket: "house-marketplace-app-da0cd.appspot.com",
  messagingSenderId: "619278674090",
  appId: "1:619278674090:web:182eebbe2bca8f3a2a08d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();