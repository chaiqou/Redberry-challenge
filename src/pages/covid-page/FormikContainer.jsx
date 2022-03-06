import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";

// Reusable formik sceleton

const FormikContainer = () => {
  const workRadio = [
    { key: "From Sairme Office", value: "From Sairme Office" },
    { key: "From Home", value: "From Home" },
    { key: "Hybrid", value: "Hybrid" },
  ];

  const covidRadio = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];

  const initialValues = {
    workRadio: "",
    covidRadio: "",
  };
  const validationSchema = Yup.object({
    workRadio: Yup.string().required("At least one checkbox is required"),
    covidRadio: Yup.string().required("Required"),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControl
            control="workRadio"
            label="How would you prefer to work?"
            name="workRadio"
            options={workRadio}
          />
          <FormikControl
            control="covidRadio"
            label="Did you contact covid 19? :("
            name="covidRadio"
            options={covidRadio}
          />
          <NextButton />
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
