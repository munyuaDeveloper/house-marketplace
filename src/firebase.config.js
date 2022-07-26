
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArTefVFCETBLBNWobOtMx9fPrVRlt7njE",
  authDomain: "house-marketplace-app-9d69f.firebaseapp.com",
  projectId: "house-marketplace-app-9d69f",
  storageBucket: "house-marketplace-app-9d69f.appspot.com",
  messagingSenderId: "1057673191593",
  appId: "1:1057673191593:web:c19206b973ab9bd80509b8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()