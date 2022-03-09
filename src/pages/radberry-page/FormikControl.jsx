import DevtalkRadioButton from "./DevtalkRadioButton";
import DevtalkTextarea from "./DevtalkTextarea";
import SomethingTextarea from "./SomethingTextarea";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "will_organize_devtalk":
      return <DevtalkRadioButton {...rest} />;
    case "devtalk_topic":
      return <DevtalkTextarea {...rest} />;
    case "something_special":
      return <SomethingTextarea {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
