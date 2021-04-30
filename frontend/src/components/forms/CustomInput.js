import React from "react";
import { Form } from "react-bootstrap";
import { useField } from "formik";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <Form.Group>
        <Form.Label htmlFor={props.id || props.name}>{label}</Form.Label>
        <Form.Control {...field} {...props} />
        {meta.touched && meta.error ? (
          <Form.Text className="text-danger">{meta.error}</Form.Text>
        ) : null}
      </Form.Group>

      {/* <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
};

export default CustomInput;
