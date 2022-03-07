import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";

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
    vaccineDate: "",
  };
  const validationSchema = Yup.object({
    workRadio: Yup.string().required("Required!"),
    covidRadio: Yup.string().required("Required!"),
    vaccineRadio: Yup.string().required("Required!"),
    covidDate: Yup.date().required("Required!").nullable(),
    vaccineDate: Yup.date().required("Required!").nullable(),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    navigate("/redberry");
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
                spacing={5}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  minHeight: "110vh",
                  minWidth: "10vw",
                  position: "absolute",

                  left: "21rem",
                  top: "20px",
                }}
                item
                xs={4}
              >
                <Typography className="text-xl">Contact date?</Typography>
                <FormikControl control="date" label="Time" name="covidDate" />
              </Grid>
              <Grid item xs={12}>
                <FormikControl
                  control="vaccineRadio"
                  label="Have you been vaccinated?"
                  name="vaccineRadio"
                  options={vaccineRadio}
                />
              </Grid>

              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{
                  minHeight: "150vh",
                  minWidth: "10vw",
                }}
                item
                xs={6}
              >
                <Typography>When did you get your covid Vaccine?</Typography>
                <FormikControl control="date" label="Time" name="vaccineDate" />
              </Grid>

              <Grid item xs={12}>
                <NextButton
                  type="submit"
                  position={`absolute left-68  top-[980px]`}
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
