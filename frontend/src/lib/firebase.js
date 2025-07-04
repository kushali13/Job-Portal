// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDg9XEBHw-htgUFHahAzkCgbDGK3x2-joA",

  authDomain: "jobportal-142e5.firebaseapp.com",

  projectId: "jobportal-142e5",

  storageBucket: "jobportal-142e5.firebasestorage.app",

  messagingSenderId: "1082283356614",

  appId: "1:1082283356614:web:9022c0d0384a4a241e82c7",

  measurementId: "G-1R03FE067C"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();