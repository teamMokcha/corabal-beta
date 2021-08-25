import React, { ReactElement } from "react";
import { TouchableOpacity } from "react-native";
import Text from "../text/text";
import styles from "./link-to-terms.styles";

export default function LinkToTerms({ children }: any, { style }: any): ReactElement {
  return (
    <TouchableOpacity>
      <Text style={styles.termsOfUseLinkText} weight="400">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
