import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import Navigator from "@config/navigator";
// import { Intro, Login, SignIn } from "@screens";

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      <Navigator />
    </AppBootstrap>
  );
}
