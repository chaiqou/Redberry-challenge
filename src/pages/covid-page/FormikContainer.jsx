import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

const FormikContainer = () => {
  const workRadio = [
    { key: "From Sairme Office", value: "From Sairme Office" },
    { key: "From Home", value: "From Home" },
    { key: "Hybrid", value: "Hybrid" },
  ];

  const covidRadio = [
    { key: "Yes", value: "Yes" },
    { key: "No", value: "No" },
  ];

  const vaccineRadio = [
    { key: "Yes", value: "Yes1" },
    { key: "No", value: "No1" },
  ];

  const initialValues = {
    workRadio: "",
    covidRadio: "",
    vaccineRadio: "",
    covidDate: "",
  };
  const validationSchema = Yup.object({
    workRadio: Yup.string().required("Required!"),
    covidRadio: Yup.string().required("Required!"),
    vaccineRadio: Yup.string().required("Required!"),
    covidDate: Yup.date().required("Required!").nullable(),
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
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <FormikControl
                  control="workRadio"
                  label="How would you prefer to work?"
                  name="workRadio"
                  options={workRadio}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikControl
                  control="covidRadio"
                  label="Did you contact covid 19? :("
                  name="covidRadio"
                  options={covidRadio}
                />
              </Grid>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  minHeight: "110vh",
                  minWidth: "10vw",
                }}
                item
                xs={2}
              >
                <FormikControl control="date" label="When?" name="covidDate" />
              </Grid>
              <Grid item xs={12}>
                <FormikControl
                  control="vaccineRadio"
                  label="Have you been vaccinated?"
                  name="vaccineRadio"
                  options={vaccineRadio}
                />
              </Grid>
              <Grid item xs={12}>
                <NextButton
                  type="submit"
                  position={`absolute left-68 top-[900px]`}
                />
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FormikContainer;
