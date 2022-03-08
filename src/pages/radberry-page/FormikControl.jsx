import DevtalkRadioButton from "./DevtalkRadioButton";
import DevtalkTextarea from "./DevtalkTextarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "devtalkRadio":
      return <DevtalkRadioButton {...rest} />;
    case "devTextarea":
      return <DevtalkTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
