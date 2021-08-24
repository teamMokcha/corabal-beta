import React, { ReactElement } from "react";
import { View } from "react-native";
import Text from "../text/text";
import styles from "./link-to-term.styles";

export default function LinkToTerm({ children }: any, { style }: any): ReactElement {
  return (
    <View style={style}>
      <Text style={styles.termsOfUseLinkText} weight="400">
        {children}
      </Text>
    </View>
  );
}
