import React from "react";

import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const LoginForm = () => (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
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
          
     
      {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;
  
  
    
    return (
      <form onSubmit={handleSubmit}>
  
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
        />
  
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
        />
  
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>
  
        <p>Don't have an account?? <a href = "#">SignIn </a>Instead
        
        
        </p>
  
        
  
      </form>
    );
  
  }}
    </Formik>
  );
  
  export default LoginForm;