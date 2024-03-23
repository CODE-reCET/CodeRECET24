import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJ05WTJ4x7pQdFnsWHyomXENf0h15hIJc",
  authDomain: "bmw3-1bdc7.firebaseapp.com",
  projectId: "bmw3-1bdc7",
  storageBucket: "bmw3-1bdc7.appspot.com",
  messagingSenderId: "882416356913",
  appId: "1:882416356913:web:4a1c9e6bca1ce73b91cf10",
  measurementId: "G-M50VZWDN1T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize the auth service

export { app, analytics, auth };
