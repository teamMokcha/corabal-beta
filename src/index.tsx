import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import { Intro, Login, SignIn } from "@screens";

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      {/* <Intro /> */}
      <Login />
      {/* <SignIn /> */}
    </AppBootstrap>
  );
}
