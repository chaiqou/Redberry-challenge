import DevtalkRadioButton from "./DevtalkRadioButton";
import DevtalkTextarea from "./DevtalkTextarea";
import SomethingTextarea from "./SomethingTextarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "devtalkRadio":
      return <DevtalkRadioButton {...rest} />;
    case "devTextarea":
      return <DevtalkTextarea {...rest} />;
    case "somethingTextarea":
      return <SomethingTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
