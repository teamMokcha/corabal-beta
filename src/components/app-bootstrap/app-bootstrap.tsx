import React, { useEffect, ReactNode, ReactElement } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  // NotoSansKR_100Thin,
  NotoSansKR_300Light,
  // NotoSansKR_400Regular,
  NotoSansKR_500Medium,
  NotoSansKR_700Bold
  // NotoSansKR_900Black
} from "@expo-google-fonts/noto-sans-kr";
import { Login } from "@screens";

type AppBootstrapProps = {
  children: ReactNode;
};

export default function AppBootstrap({ children }: AppBootstrapProps): ReactElement {
  const [fontLoaded] = useFonts({
    NotoSansKR_700Bold,
    NotoSansKR_500Medium,
    NotoSansKR_300Light
  });

  useEffect(() => {
    async function loadSplash() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 5000));
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    loadSplash();
  }, []);

  return fontLoaded ? <>{children}</> : <Login />;
}
