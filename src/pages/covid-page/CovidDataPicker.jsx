import { ErrorMessage, Field } from "formik";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CovidDataPicker = ({ label, name, ...rest }) => {
  return (
    <div className="">
      <label className="" htmlFor={name}>
        {label}
      </label>
      <Field className="" name={name}>
        {({ form, field }) => {
          const { setFieldValue } = form;
          const { value } = field;
          return (
            <DatePicker
              {...field}
              id={name}
              {...rest}
              selected={value}
              onChange={(val) => setFieldValue(name, val)}
            />
          );
        }}
      </Field>
    </div>
  );
};

export default CovidDataPicker;
