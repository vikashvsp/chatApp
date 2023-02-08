// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Your web app's Firebase configuration
const firebaseConfig = {
     apiKey: Constants.manifest.extra.apiKey,
     authDomain: Constants.manifest.extra.authDomain,
     projectId: Constants.manifest.extra.projectId,
     storageBucket: Constants.manifest.extra.storageBucket,
     messagingSenderId: Constants.manifest.extra.messagingSenderId,
     appId: Constants.manifest.extra.appId,
     databaseURL: Constants.manifest.extra.databaseURL
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth=getAuth();
export const database = getFirestore();