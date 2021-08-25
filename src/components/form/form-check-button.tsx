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
  if (values.acceptTerms === false) {
    return (
      <View style={styles.checkTermsContainer}>
        <TouchableOpacity
          style={styles.checkTermsButton}
          onPress={() => setFieldValue("acceptTerms", true)}
        />
        <Text weight="400" style={styles.checkTermsText}>
          개인정보 처리 방침에 동의합니다.
        </Text>
      </View>
    );
  }
  return <View></View>;
}
