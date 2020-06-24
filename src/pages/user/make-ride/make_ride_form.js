import * as Yup from "yup";
import React from "react";
import { Formik, ErrorMessage, Field, Form } from "formik";

export const validationSchema = Yup.object().shape({
  departure: Yup.string().required("Departure is required"),
  destination: Yup.string().required("Destination is required"),
  carRegistration: Yup.string().required("Plz enter registration number"),
  carDescription: Yup.string().required("Ener car description"),
  availableSeats: Yup.number()
    .required("Available Seats required")
    .min(1, "Show be atleast 1")
    .max(3, "Max can be 3"),
  estReachingTime: Yup.number()
    .required("Est reaching time is required")
    .min(1),
  departureDate: Yup.date().required("Date is required"),
});

const MakeRideForm = (props) => {
  let cities =
    props.cities.length === 0
      ? null
      : props.cities.map((city, i) => (
          <option value={city.name} key={i}>
            {city.name}
          </option>
        ));
  return (
    <Formik
      initialValues={{
        departure: "",
        destination: "",
        carRegistration: "",
        carDescription: "",
        departureDate: "",
        availableSeats: "",
        estReachingTime: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        props.makeRideHandler(values);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="container-fluid">
          <div className="form-row">
            <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="">Select Departure City</label>
              <Field
                as="select"
                name="departure"
                className="custom-select w-100"
              >
                <option value="">Select Departure City</option>
                {cities}
              </Field>
              <ErrorMessage name="departure">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="form-group col-lg-6 col-md-6 col-12">
              <label htmlFor="">Select Destination City</label>
              <Field
                as="select"
                name="destination"
                className="custom-select w-100"
              >
                <option value="">Select Destination City</option>
                {cities}
              </Field>
              <ErrorMessage name="destination">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>

            <div className="form-group col-md-6 col-12">
              <label htmlFor="">Select Departure Date</label>
              <Field
                type="date"
                className="form-control"
                name="departureDate"
              />
              <ErrorMessage name="departureDate">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="">Est Reaching Time</label>
              <Field
                type="number"
                className="form-control"
                name="estReachingTime"
              />
              <ErrorMessage name="estReachingTime">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="">Choose Registraion no.</label>
              <Field
                type="text"
                className="form-control"
                name="carRegistration"
              />
              <ErrorMessage name="carRegistration">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="form-group col-md-6 col-12">
              <label htmlFor="">Available Seats</label>
              <Field
                type="number"
                className="form-control"
                name="availableSeats"
              />
              <ErrorMessage name="availableSeats">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>

            <div className="form-group col-md-6 col-12">
              <label htmlFor="">Car Description</label>
              <Field
                as="textarea"
                className="form-control"
                name="carDescription"
              />
              <ErrorMessage name="carDescription">
                {(msg) => <p className="text-danger">{msg}</p>}
              </ErrorMessage>
            </div>
            <div className="col-12 d-flex align-items-center justify-content-end">
              <button
                className="btn btn-success rounded-pill"
                type="submit"
                disabled={isSubmitting}
              >
                Make Ride
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MakeRideForm;
