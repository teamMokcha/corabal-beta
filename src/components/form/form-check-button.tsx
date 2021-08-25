import React, { ReactElement } from "react";
import { TouchableOpacity, View } from "react-native";
import { FormikContextType, useFormikContext } from "formik";
import Text from "../text/text";
import styles from "./forms.styles";

interface Values {
  email: string;
  password: string;
  acceptTerms: boolean;
}

export default function FormCheckButton(): ReactElement {
  const { setFieldValue, values }: FormikContextType<Values> = useFormikContext();

  return (
    <View style={styles.checkTermsContainer}>
      {values.acceptTerms === false ? (
        <TouchableOpacity
          style={[styles.checkTermsButton, styles.checkTermsButtonFalse]}
          onPress={() => setFieldValue("acceptTerms", true)}
        />
      ) : (
        <TouchableOpacity
          style={[styles.checkTermsButton, styles.checkTermsButtonTrue]}
          onPress={() => setFieldValue("acceptTerms", false)}
        />
      )}
      <Text weight="400" style={styles.checkTermsText}>
        개인정보 처리 방침과 이용약관에 동의합니다.
      </Text>
    </View>
  );
}
