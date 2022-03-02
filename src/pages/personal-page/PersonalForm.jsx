import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import NextButton from "../../components/NextButton";
import InputField from "../../components/InputField";
import ErrorText from "../../components/ErrorText";

const initialValues = {
  // sawyisi valueebi form submissionistvis
  firstname: "",
  lastname: "",
  email: "",
  number: "",
};

const validate = (values) => {
  // validate method abrunebs objects , aqedan gvchirdeba errorebiss objecti
  // errors objectis key values === initialValues key values , error object value === ERROR MESSAGE VALUE
  let errors = {};

  if (!values.firstname) {
    errors.firstname = "This field is required";
  }
  if (!values.lastname) {
    errors.lastname = "This field is required";
  }
  if (!values.email) {
    errors.email = "This field is required";
  }
  if (!values.number) {
    errors.number = "This field is required";
  }

  return errors;
};

const PersonalForm = () => {
  const history = useHistory();
  // managing form state

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: (values) => {
      // aqedan gaigzavneba values api_shi post requestit da dasabmitebis dros aseve
      // gadavalt shemdeg pageze tu formebi shevsebuli iqneba zustad
      if (values) {
        history.push("/covid");
      }
    },
  });

  return (
    <form
      type="submit"
      onSubmit={formik.handleSubmit}
      className="flex flex-col"
    >
      <InputField
        onChange={formik.handleChange}
        value={formik.values.firstname}
        type="text"
        name="firstname"
        position={`top-[385px]`}
        placeholder="First name"
        formikError={formik?.errors?.firstname}
      />
      {formik.errors.firstname ? (
        <ErrorText text={formik.errors.firstname} position={`top-[330px]`} />
      ) : null}
      <InputField
        onChange={formik.handleChange}
        value={formik.values.lastname}
        type="text"
        name="lastname"
        position={`top-[500px]`}
        placeholder="Last name"
        formikError={formik?.errors?.lastname}
      />
      {formik.errors.lastname ? (
        <ErrorText text={formik.errors.lastname} position={`top-[445px]`} />
      ) : null}
      <InputField
        onChange={formik.handleChange}
        value={formik.values.email}
        type="email"
        name="email"
        position={`top-[610px]`}
        placeholder="Email"
        formikError={formik?.errors?.email}
      />
      {formik.errors.email ? (
        <ErrorText text={formik.errors.email} position={`top-[560px]`} />
      ) : null}
      <InputField
        onChange={formik.handleChange}
        value={formik.values.number}
        type="number"
        name="number"
        position={`top-[730px]`}
        placeholder="Number"
        formikError={formik?.errors?.number}
      />
      {formik.errors.number ? (
        <ErrorText text={formik.errors.number} position={`top-[675px]`} />
      ) : null}
      <NextButton position={`absolute left-48 top-[800px]`} />
    </form>
  );
};

export default PersonalForm;
