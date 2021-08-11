import React, { ReactNode, ReactElement } from "react";
import { Text as NativeText, TextProps as NativeTextProps } from "react-native";

type TextProps = {
  weight: "300" | "500" | "700";
  children: ReactNode;
} & NativeTextProps;

const defaultProps = {
  weight: "500"
};

export default function Text({ children, style, weight, ...props }: TextProps): ReactElement {
  let fontFamily;
  if (weight === "700") {
    fontFamily = "NotoSansKR_700Bold";
  }
  if (weight === "500") {
    fontFamily = "NotoSansKR_500Medium";
  }
  if (weight === "300") {
    fontFamily = "NotoSansKR_300Light";
  }

  return (
    <NativeText {...props} style={[{ fontFamily }, style]}>
      {children}
    </NativeText>
  );
}

Text.defaultProps = defaultProps;
