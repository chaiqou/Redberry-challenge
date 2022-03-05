import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";

// Reusable formik sceleton

const FormikContainer = () => {
  const workRadio = [
    { key: "From Sairme Office", value: "rOption1" },
    { key: "From Home", value: "rOption2" },
    { key: "Hybrid", value: "rOption3" },
  ];

  const initialValues = {
    workRadio: "",
  };
  const validationSchema = Yup.object({
    workRadio: Yup.string().required("Required"),
  });
  const onSubmit = (values) => console.log(values);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="radio"
            label="How would you prefer to work?"
            name="radioOption"
            options={workRadio}
          />
          <NextButton type="submit" position={`absolute left-48 top-[800px]`} />
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
