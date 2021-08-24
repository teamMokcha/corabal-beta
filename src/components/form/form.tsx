import React, { ReactElement } from "react";
import { Formik } from "formik";

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
      {() => <>{children}</>}
    </Formik>
  );
}
