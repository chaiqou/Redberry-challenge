import NextButton from "../../components/NextButton";
import ErrorText from "../../components/ErrorText";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  reusableStylesField,
  reusableStylesError,
} from "../../helpers/ReusableStyles";
import * as Yup from "yup";

const CovidForm = () => {
  return <div>CovidForm</div>;
};

export default CovidForm;
