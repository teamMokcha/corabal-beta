import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import * as WebBrowser from "expo-web-browser";
import Text from "../text/text";
import styles from "./link-to-terms.styles";

export default function LinkToTerms({ children, URL }: any): ReactElement {
  return (
    <TouchableOpacity onPress={() => WebBrowser.openBrowserAsync(URL)}>
      <Text style={styles.termsOfUseLinkText} weight="400">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
