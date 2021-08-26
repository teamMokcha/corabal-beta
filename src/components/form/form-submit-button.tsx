import React, { ReactElement } from "react";
import ButtonNormal from "../button/button-normal";
import ButtonGradient from "../button/button-gradient";
import { useFormikContext } from "formik";
import styles from "./forms.styles";

interface FormSubmitButtonProps {
  title: string;
}

export default function FormSubmitButton({ title }: FormSubmitButtonProps): ReactElement {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <>
      {isValid ? (
        <ButtonGradient title={title} onPress={() => handleSubmit()} style={styles.button} />
      ) : (
        <ButtonNormal title={title} style={styles.button} />
      )}
    </>
  );
}
