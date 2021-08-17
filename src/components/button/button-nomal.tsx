import React, { ReactElement } from "react";
import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Text from "../text/text";
import styles from "./button.styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function ButtonNomal({ title, style, ...props }: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={[styles.buttonContainer, styles.buttonNomalBorder, style]}>
      <Text style={(styles.buttonText, { color: "#000000" })} weight="400">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
