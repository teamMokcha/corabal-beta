import React, { ReactElement } from "react";
import firebase from "firebase";
import apiKeys from "../config/keys";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
import "@hookstate/devtools";

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
