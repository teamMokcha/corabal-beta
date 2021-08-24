import React, { ReactElement } from "react";
import ButtonNomal from "../button/button-nomal";
import ButtonGradient from "../button/button-gradient";
import { useFormikContext } from "formik";

interface FormSubmitButtonProps {
  title: string;
}

export default function FormSubmitButton({ title }: FormSubmitButtonProps): ReactElement {
  const { handleSubmit, isValid } = useFormikContext();

  return (
    <>
      {isValid ? (
        <ButtonGradient title={title} onPress={() => handleSubmit()} />
      ) : (
        <ButtonNomal title={title} />
      )}
    </>
  );
}
