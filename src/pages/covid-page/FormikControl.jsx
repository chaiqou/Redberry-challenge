import WorkRadioButton from "./WorkRadioButton";
import CovidRadioButton from "./CovidRadioButton";
import CovidDataPicker from "./CovidDataPicker";
import VaccineRadioButton from "./VaccineRadioButton";

// control component for form types

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "work_preference":
      return <WorkRadioButton {...rest} />;
    case "had_covid":
      return <CovidRadioButton {...rest} />;
    case "vaccinated":
      return <VaccineRadioButton {...rest} />;
    case "date":
      return <CovidDataPicker {...rest} />;

    default:
      return null;
  }
};

export default FormikControl;
