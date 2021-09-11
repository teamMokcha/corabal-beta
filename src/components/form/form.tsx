import React, { ReactElement } from "react";
import { View } from "react-native";
import { Formik } from "formik";
import styles from "./forms.styles";

export default function Form({
  initialValues,
  onSubmit,
  validationSchema,
  children
}: any): ReactElement {
  return (
    <Formik
      initialValues={initialValues}
      validateOnMount
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => <View style={styles.inputContainer}>{children}</View>}
    </Formik>
  );
}
