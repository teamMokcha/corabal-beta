import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
// import { Intro, Login, SignIn } from "@screens";
import { Provider as PaperProvider } from "react-native-paper";
import { RootNavigator } from "@config/navigator";

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      <PaperProvider>
        <RootNavigator />
      </PaperProvider>
    </AppBootstrap>
  );
}
