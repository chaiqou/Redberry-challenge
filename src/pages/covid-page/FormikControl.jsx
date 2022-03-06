import WorkRadioButton from "./WorkRadioButton";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "workRadio":
      return <WorkRadioButton {...rest} />;
    case "date":
    default:
      return null;
  }
};

export default FormikControl;
