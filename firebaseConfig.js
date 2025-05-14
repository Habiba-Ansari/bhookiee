import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA5jVQcxmKKLQy31Ft8329EB_cWRyBu0uI",
  authDomain: "bhookiecore.firebaseapp.com",
  databaseURL: "https://bhookiecore-default-rtdb.firebaseio.com",
  projectId: "bhookiecore",
  storageBucket: "bhookiecore.firebasestorage.app",
  messagingSenderId: "252666746613",
  appId: "1:252666746613:web:460ba1d0124c6f9a2d17bc",
  measurementId: "G-NHRT2XRJRB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = firebaseConfig.firestore();