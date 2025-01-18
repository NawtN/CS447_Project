// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_E6R-TVhOSyY4nFAEU1K8JNLhjMfPgH4",
  authDomain: "proj-60c36.firebaseapp.com",
  projectId: "proj-60c36",
  storageBucket: "proj-60c36.firebasestorage.app",
  messagingSenderId: "328199425036",
  appId: "1:328199425036:web:ce154a0f788f9469bbb229"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication=getAuth(app);
export const database =getFirestore();

