import React, { useEffect, useState } from "react";
import { Field, ErrorMessage, Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import {
  reusableStylesField,
  reusableStylesError,
} from "../../helpers/ReusableStyles";
import Axios from "axios";

const initialValues = {
  // sawyisi value stateebi sadac aisaxeba validaciis dros sheyvanili user informacia
  skills: "",
  experience: "",
};

const validationSchema = Yup.object({
  skills: Yup.string().required("Select minimum 1 skill"),
  experience: Yup.string().required(),
});

const TechnicalForm = () => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const onSubmit = (values) => {
    navigate("/covid");
  };

  useEffect(() => {
    Axios.get("https://bootcamp-2022.devtest.ge/api/skills").then(
      (response) => {
        setOptions(response.data);
      }
    );
  }, []);

  console.log(options);

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
            {options.map((option) => (
              <option
                className="h-3 rounded-lg"
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
            className={`${reusableStylesError} top-[344px]`}
          />
        </Form>
      </Formik>
    </div>
  );
};

export default TechnicalForm;
