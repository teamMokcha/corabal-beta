import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
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
import { Text } from "@Components";

export default function App() {
  const [fontLoaded] = useFonts({
    NotoSansKR_700Bold,
    NotoSansKR_500Medium,
    NotoSansKR_300Light
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontSize: 24 }} weight="500">
        Head1 Font Style
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
});
