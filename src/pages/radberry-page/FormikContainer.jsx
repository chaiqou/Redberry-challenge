import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container } from "@material-ui/core";

const FormikContainer = () => {
  const devtalkRadio = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const initialValues = {
    devtalkRadio: "",
    devTextarea: "",
    somethingTextarea: "",
  };
  const validationSchema = Yup.object({
    devtalkRadio: Yup.string().required("Required!"),
    devTextarea: Yup.string().required("Required!"),
    somethingTextarea: Yup.string().required("Required!"),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    localStorage.setItem("devtalk", JSON.stringify(values));
    navigate("/submit");
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
            <FormikControl
              control="somethingTextarea"
              name="somethingTextarea"
              label="Tell us something special"
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
