import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
const LoginForm = (props) => {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Username is required";
        }
        if (!values.password) {
          errors.password = "Password is required";
        }
        if (values.password.length < 8) {
          errors.password = "Password must be greater than 8 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        props.formSubmission(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <Field
              type="text"
              name="username"
              placeholder="username"
              className="form-control"
            ></Field>
            <ErrorMessage name="username">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Field
              type="text"
              name="password"
              placeholder="password"
              className="form-control"
            ></Field>
            <ErrorMessage name="password">
              {(msg) => <div className="text-danger">{msg}</div>}
            </ErrorMessage>
          </div>
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isSubmitting}
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
