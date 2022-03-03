import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import NextButton from "../../components/NextButton";
import {
  reusableStylesField,
  reusableStylesError,
} from "../../helpers/ReusableStyles";
import "yup-phone-lite";
import * as Yup from "yup";

const initialValues = {
  // sawyisi value stateebi sadac aisaxeba validaciis dros sheyvanili user informacia
  firstname: "",
  lastname: "",
  email: "",
  number: "",
};

// validationistvis sachiro motxovnebi romlebic unda daakmayofilos userma sxva gverdze gadasvlis dros
const validationSchema = Yup.object({
  firstname: Yup.string()
    .min(2)
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  lastname: Yup.string()
    .min(2)
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  email: Yup.string()
    .email()
    .required(
      "This field is required , Please fill things up and try submitting again"
    ),
  number: Yup.string().phone("GE", "Please enter a valid phone number"),
});

// COMPONENT !!!

const PersonalForm = () => {
  const navigate = useNavigate();
  // dasabmitebis shemdeg tu ra moxdeba tu yvela field sheesabameba motxovnebs

  const onSubmit = (values) => {
    navigate("/covid");
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col">
        <div className="mb-6">
          <Field
            type="text"
            name="firstname"
            className={`${reusableStylesField} top-[385px] `}
            placeholder="First name"
          />
          <ErrorMessage
            name="firstname"
            component="div"
            className={`${reusableStylesError} top-[330px]`}
          />

          <Field
            type="text"
            name="lastname"
            className={`${reusableStylesField} top-[500px]`}
            placeholder="Last name"
          />
          <ErrorMessage
            name="lastname"
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
            name="number"
            className={`${reusableStylesField} top-[730px]`}
            placeholder="Phone number"
          />
          <ErrorMessage
            name="number"
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
