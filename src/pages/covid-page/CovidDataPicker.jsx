import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

const CovidDatePicker = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: "date",
    variant: "outlined",
    fullWidth: false,
    InputLabelProps: {
      shrink: true,
    },
  };

  if (meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return <TextField {...configDateTimePicker} />;
};

export default CovidDatePicker;
