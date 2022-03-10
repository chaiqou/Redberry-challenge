import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import NextButton from "../../components/NextButton";
import FormikControl from "./FormikControl";
import { useNavigate } from "react-router-dom";
import { Container, Grid, Typography } from "@material-ui/core";
import { vaccinated } from "./test";

const FormikContainer = () => {
  const work_preference = [
    { key: "From Sairme Office", value: "from_home" },
    { key: "From Home", value: "from_office" },
    { key: "Hybrid", value: "hybrid" },
  ];

  const had_covid = [
    { key: "Yes", value: "true" },
    { key: "No", value: "false" },
  ];

  const vaccinated = [
    { key: "Yes", value: "true1" },
    { key: "No", value: "false1" },
  ];

  const initialValues = {
    work_preference: "",
    had_covid: "",
    vaccinated: "",
    had_covid_at: "",
    vaccinated_at: "",
  };
  const validationSchema = Yup.object({
    work_preference: Yup.string().required("Required!"),
    had_covid: Yup.string().required("Required!"),
    vaccinated: Yup.string().required("Required!"),
    had_covid_at: Yup.date().required("Required!").nullable(),
    vaccinated_at: Yup.date().required("Required!").nullable(),
  });

  const navigate = useNavigate();

  const onSubmit = (values) => {
    localStorage.setItem("covid", JSON.stringify(values));
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
                  control="work_preference"
                  label="How would you prefer to work?"
                  name="work_preference"
                  options={work_preference}
                />
              </Grid>
              <Grid item xs={12}>
                <FormikControl
                  control="had_covid"
                  label="Did you contact covid 19? :("
                  name="had_covid"
                  options={had_covid}
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
                <FormikControl
                  control="date"
                  label="Time"
                  name="had_covid_at"
                />
              </Grid>
              <Grid item xs={12}>
                <FormikControl
                  control="vaccinated"
                  label="Have you been vaccinated?"
                  name="vaccinated"
                  options={vaccinated}
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
                <FormikControl
                  control="date"
                  label="Time"
                  name="vaccinated_at"
                />
              </Grid>

              <Grid item xs={12}>
                <NextButton
                  type="submit"
                  position={`absolute left-48  top-[980px]`}
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
