import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";

const FormikContainer = () => {
  const devtalkRadio = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const initialValues = {
    devtalkRadio: "",
    devTextarea: "",
  };
  const validationSchema = Yup.object({
    devtalkRadio: Yup.string().required("Required!"),
    devTextarea: Yup.string().required("Required!"),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form>
            <FormikControl
              control="devtalkRadio"
              label="Would you attend Devtalks and maybe also organize your own?"
              name="devtalkRadio"
              options={devtalkRadio}
            />
            <FormikControl
              control="devTextarea"
              label="What would you speak about at Devtalk?"
              name="devTextarea"
            />
            <NextButton
              type="submit"
              position={`absolute left-68  top-[980px]`}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormikContainer;
