import React, { ReactElement } from "react";
import firebase from "firebase";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
import apiKeys from "../api/keys";

export default function App(): ReactElement {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.firebaseConfig);
    console.log("Connected with Firebase");
  }
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
}
