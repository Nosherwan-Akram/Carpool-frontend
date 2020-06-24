import { Form, Formik, ErrorMessage, Field } from "formik";
import SignupSchema from "./signupSchema";
import React from "react";
const SignupForm = (props) => {
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        repassword: "",
      }}
      validationSchema={SignupSchema}
      validate={(values) => {
        const errors = {};
        if (values.password !== values.repassword) {
          errors.repassword = "Re typed password is not same";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        props.registerHandler(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="container-fluid">
          <div className="form-row">
            <div className="form-group col-md-6 col-12">
              <label htmlFor="email">Email</label>
              <Field
                type="text"
                placeholder="Email"
                name="email"
                className="form-control"
              ></Field>
              <ErrorMessage name="email">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="username">User Name</label>
              <Field
                type="text"
                placeholder="User Name"
                name="username"
                className="form-control"
              ></Field>
              <ErrorMessage name="username">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="password">Password</label>
              <Field
                type="text"
                placeholder="Password"
                name="password"
                className="form-control"
              ></Field>
              <ErrorMessage name="password">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="repassword">Re-Password</label>
              <Field
                type="text"
                placeholder="Re-Password"
                name="repassword"
                className="form-control"
              ></Field>
              <ErrorMessage name="repassword">
                {(msg) => <div className="text-danger">{msg}</div>}
              </ErrorMessage>
            </div>
            <button
              className="btn btn-success col-12"
              type="submit"
              disabled={isSubmitting}
            >
              Signup
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
