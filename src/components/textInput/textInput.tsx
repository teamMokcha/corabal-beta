import React, { ReactElement, forwardRef } from "react";
import { TextInput as NativeTextInput, View } from "react-native";
import styles from "./textInput.styles";

export default function TextInput({ ...otherProps }, ref: any): ReactElement {
  // const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";
  return (
    <View style={styles.container}>
      <NativeTextInput
        {...otherProps}
        // style={{ color: validationColor }}
        ref={ref}
      />
    </View>
  );
}
