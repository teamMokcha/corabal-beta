import firebase from "firebase";
import "firebase/firestore";
import apiKeys from "./keys";

export const firebaseApp = firebase.initializeApp(apiKeys.firebaseConfig);
export const db = firebase.firestore();
console.log("Firebase is initialized.");
