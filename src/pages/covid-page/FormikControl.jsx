import WorkRadioButton from "./WorkRadioButton";
import CovidRadioButton from "./CovidRadioButton";
import CovidDataPicker from "./CovidDataPicker";

// control component for form types

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "workRadio":
      return <WorkRadioButton {...rest} />;
    case "covidRadio":
      return <CovidRadioButton {...rest} />;
    case "date":
      return <CovidDataPicker {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
