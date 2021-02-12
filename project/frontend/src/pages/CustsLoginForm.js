import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import "./CustsLoginForm.css";

const CustsLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
  >
    {(props) => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;

      return (
        <form onSubmit={handleSubmit} className="cust_login">
          <h1 className="cust_login_text">Customer Login</h1>

          <label className="cust_login_label" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            placeholder="Enter your email"
            className="cust_input"
          />

          <label className="cust_login_label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="cust_input"
          />

          <button
            className="cust_login_btn"
            type="submit"
            disabled={isSubmitting}
          >
            Login
          </button>

          <p>
            Don't have an account?? <a href="/custs/signup">Sign Up </a>Instead
          </p>
        </form>
      );
    }}
  </Formik>
);

export default CustsLoginForm;
