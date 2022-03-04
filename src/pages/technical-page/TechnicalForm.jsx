import React, { useEffect, useState } from "react";
import { Field, ErrorMessage, Formik, Form, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  reusableStylesField,
  reusableStylesError,
} from "../../helpers/ReusableStyles";
import Axios from "axios";
import AddButton from "../../components/AddButton";
import LanguagesList from "./LanguagesList";

const initialValues = {
  // sawyisi value stateebi sadac aisaxeba validaciis dros sheyvanili user informacia

  skills: "",
  experience: "",
};

// validation for formik

const validationSchema = Yup.object({
  skills: Yup.string().required(
    "This field is required , Please fill things up and try submitting again"
  ),
  experience: Yup.number()
    .min(1)
    .max(99)
    .positive("Only positive numbers required")
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
});

const TechnicalForm = () => {
  const [options, setOptions] = useState([]);
  const [userValues, setUserValues] = useState([]);

  const navigate = useNavigate();

  // dasabmitebis shemdeg ra moxdeba am shemtxvevashi stateshi vinaxavt useris mier sheyvanil valueebs

  const onSubmit = (values) => {
    setUserValues([values]);
  };

  if (userValues.length !== 0) {
    console.log(userValues);
  }

  // vawvdit dropdown menius apidan wamogebul datas

  useEffect(() => {
    Axios.get("https://bootcamp-2022.devtest.ge/api/skills").then(
      (response) => {
        setOptions(response.data);
      }
    );
  }, []);

  return (
    <div className={`mb-6`}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col">
          <Field
            name="skills"
            as="select"
            className={`${reusableStylesField} top-[366px]`}
            placeholder="Skills"
          >
            <option defaultValue>Skills</option>
            {options.map((option) => (
              <option
                className="absolute w-3 h-3"
                key={option.id}
                value={option.title}
              >
                {option.title}
              </option>
            ))}
          </Field>
          <ErrorMessage
            name="skills"
            component="div"
            className={`${reusableStylesError} top-[314px]`}
          />
          <Field
            name="experience"
            type="number"
            placeholder="Experience duration in years"
            className={`${reusableStylesField} top-[471px]`}
          ></Field>
          <ErrorMessage
            name="experience"
            component="div"
            className={`${reusableStylesError} top-[420px]`}
          />

          <AddButton
            onClick={(e) => e.preventDefault()}
            position={`top-[534px] left-[440px]`}
          >
            Add Programming Language
          </AddButton>
          <LanguagesList userValues={userValues} />
        </Form>
      </Formik>
    </div>
  );
};

export default TechnicalForm;
