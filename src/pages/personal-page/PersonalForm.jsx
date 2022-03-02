import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import NextButton from "../../components/NextButton";
import InputField from "../../components/InputField";

const PersonalForm = () => {
  const history = useHistory();

  // managing form state

  const formik = useFormik({
    // formis sawyisi valueebi
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      number: "",
    },
    onSubmit: (data) => {
      console.log(data);
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
        position={`top-[390px]`}
        placeholder="First name"
      />
      <InputField
        onChange={formik.handleChange}
        value={formik.values.lastname}
        type="text"
        name="lastname"
        position={`top-[481px]`}
        placeholder="Last name"
      />
      <InputField
        onChange={formik.handleChange}
        value={formik.values.email}
        type="text"
        name="email"
        position={`top-[571px]`}
        placeholder="Email"
      />
      <InputField
        onChange={formik.handleChange}
        value={formik.values.number}
        type="number"
        name="Number"
        position={`top-[662px]`}
        placeholder="Number"
      />

      <NextButton position={`absolute left-48 top-[740px]`} />
    </form>
  );
};

export default PersonalForm;
