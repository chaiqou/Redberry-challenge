import DevtalkRadioButton from "./DevtalkRadioButton";

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case "devtalkRadio":
      return <DevtalkRadioButton {...rest} />;
    default:
      return null;
  }
};

export default FormikControl;
