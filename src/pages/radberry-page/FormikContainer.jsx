import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container } from "@material-ui/core";

const FormikContainer = () => {
  const will_organize_devtalk = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const initialValues = {
    will_organize_devtalk: "",
    devtalk_topic: "",
    something_special: "",
  };
  const validationSchema = Yup.object({
    will_organize_devtalk: Yup.string().required("Required!"),
    devtalk_topic: Yup.string().required("Required!"),
    something_special: Yup.string().required("Required!"),
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
              control="will_organize_devtalk"
              label="Would you attend Devtalks and maybe also organize your own?"
              name="will_organize_devtalk"
              options={will_organize_devtalk}
            />
            <FormikControl
              control="devtalk_topic"
              label="What would you speak about at Devtalk?"
              name="devtalk_topic"
            />
            <FormikControl
              control="something_special"
              name="something_special"
              label="Tell us something special"
            />
            <NextButton
              type="submit"
              position={`absolute left-48  top-[830px]`}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormikContainer;
