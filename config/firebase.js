// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: "AIzaSyD-VRMDSd6n3lBKND-jgx0rP7vTcs_Ni-A",
     authDomain: "chatapp-acc33.firebaseapp.com",
     projectId: "chatapp-acc33",
     storageBucket: "chatapp-acc33.appspot.com",
     messagingSenderId: "600635671921",
     appId: "1:600635671921:web:87d65bfa9032fc998ba2d0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();