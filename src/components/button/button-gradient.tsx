import React, { ReactElement } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Text from "../text/text";
import styles from "./button.styles";

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export default function Button({ title, style, ...props }: ButtonProps): ReactElement {
  return (
    <TouchableOpacity {...props} style={style}>
      <LinearGradient
        colors={["hsla(199, 79%, 71%, 1)", "hsla(220, 100%, 73%, 1)"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <Text style={(styles.buttonText, { color: "#FFFFFF" })} weight="400" selectionColor="red">
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
