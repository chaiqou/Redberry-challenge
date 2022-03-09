import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";

import NextButton from "../../components/NextButton";
import {
  reusableStylesField,
  reusableStylesError,
} from "../../helpers/ReusableStyles";
import "yup-phone-lite";
import * as Yup from "yup";

const initialValues = {
  // sawyisi value stateebi sadac aisaxeba validaciis dros sheyvanili user informacia
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
};

// validationistvis sachiro motxovnebi romlebic unda daakmayofilos userma sxva gverdze gadasvlis dros
const validationSchema = Yup.object({
  first_name: Yup.string()
    .min(2)
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  last_name: Yup.string()
    .min(2)
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  email: Yup.string()
    .email()
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  phone: Yup.string()
    .phone(
      "GE",
      "Please enter a valid phone number example: (+995 555 444 333) "
    )
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
});

// COMPONENT !!!

const PersonalForm = () => {
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    navigate("/technical");
    localStorage.setItem("name", JSON.stringify(values));
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
      validateOnChange={false}
    >
      <Form className="flex flex-col">
        <div className="mb-6">
          <Field
            type="text"
            name="first_name"
            className={`${reusableStylesField} top-[385px] `}
            placeholder="First name"
          />
          <ErrorMessage
            name="first_name"
            component="div"
            className={`${reusableStylesError} top-[330px]`}
          />

          <Field
            type="text"
            name="last_name"
            className={`${reusableStylesField} top-[500px]`}
            placeholder="Last name"
          />
          <ErrorMessage
            name="last_name"
            component="div"
            className={`${reusableStylesError} top-[445px]`}
          />

          <Field
            type="email"
            name="email"
            className={`${reusableStylesField} top-[610px]`}
            placeholder="Email address"
          />
          <ErrorMessage
            name="email"
            component="div"
            className={`${reusableStylesError} top-[560px]`}
          />

          <Field
            type="number"
            name="phone"
            className={`${reusableStylesField} top-[730px]`}
            placeholder="Phone number"
          />
          <ErrorMessage
            name="phone"
            component="div"
            className={`${reusableStylesError} top-[675px]`}
          />

          <NextButton type="submit" position={`absolute left-48 top-[800px]`} />
        </div>
      </Form>
    </Formik>
  );
};

export default PersonalForm;
