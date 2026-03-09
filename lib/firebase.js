// lib/firebase.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeEVRdke4xrlkNMYZkrBlxhoyGV9LUExs",
  authDomain: "marwa-abdelaziz.firebaseapp.com",
  projectId: "marwa-abdelaziz",
  storageBucket: "marwa-abdelaziz.firebasestorage.app",
  messagingSenderId: "891627822502",
  appId: "1:891627822502:web:eccd6c9147b15e7c320367",
  measurementId: "G-G7STY5BFK1"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
