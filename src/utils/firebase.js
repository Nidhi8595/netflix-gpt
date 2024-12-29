// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiL7BnzGmk1QCMQP8yze1D-mgPl94GCFo",
  authDomain: "netflixgpt-cb949.firebaseapp.com",
  projectId: "netflixgpt-cb949",
  storageBucket: "netflixgpt-cb949.firebasestorage.app",
  messagingSenderId: "813991731951",
  appId: "1:813991731951:web:095ab359cb64680a64f11a",
  measurementId: "G-2ZF5YHXBWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);