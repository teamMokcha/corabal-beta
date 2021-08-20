import firebase from "firebase/app";

//import "firebase/firestore";
//import "firebase/functions";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
};

let Firebase;

if (firebase.app.length === 0) {
  Firebase = firebase.initializeApp(firebaseConfig);
}

export default Firebase;
