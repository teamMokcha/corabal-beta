import firebase from "firebase/app";

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_NATIVE_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_NATIVE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_NATIVE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_NATIVE_APP_FIREBASE_PROJECT_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
