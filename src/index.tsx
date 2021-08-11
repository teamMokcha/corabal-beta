import React, { ReactElement } from "react";
import { AppBootstrap } from "@Components";
import { Intro } from "@screens";

export default function App(): ReactElement {
  return (
    <AppBootstrap>
      <Intro />
    </AppBootstrap>
  );
}
