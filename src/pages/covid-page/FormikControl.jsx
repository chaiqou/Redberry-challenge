import WorkRadioButton from "./WorkRadioButton";
import CovidRadioButton from "./CovidRadioButton";

// control component for form types

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "workRadio":
      return <WorkRadioButton {...rest} />;
    case "covidRadio":
      return <CovidRadioButton {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
