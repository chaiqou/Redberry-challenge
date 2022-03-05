import RadioButtons from "./RadioButtons";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "radio":
      return <RadioButtons {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
