import React, { useEffect } from "react";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import styled from "@emotion/styled";
import "./CustsLoginSignUpForm.css";
// import "./CustsSignUpForm.css";

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

// Styled components ....
const StyledSelect = styled.select`
  color: var(--blue);
`;

const StyledErrorMessage = styled.div`
  font-size: 12px;
  color: var(--red-600);
  width: 400px;
  margin-top: 0.25rem;
  &:before {
    content: "❌ ";
    font-size: 10px;
  }
  @media (prefers-color-scheme: dark) {
    color: var(--red-300);
  }
`;

const StyledLabel = styled.label`
  margin-top: 1rem;
`;

const MySelect = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and alse replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const CustsSignUpForm = () => {
  return (
    <>
      
      <Formik
        initialValues={{
          Name: "",
          pin: "",
          email: "",
          acceptedTerms: false, // added for our checkbox
          jobType: "", // added for our select
          phNumber: "",
        }}
        validationSchema={Yup.object({
          Name: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
          pin: Yup.string()
            .max(6, "Must be equal to 6 digits")
            .required("Required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Required"),
          phNumber: Yup.string()
            .max(10, "Must be 10 characters")
            .min(10, "Must be 10 characters")
            .required("Required"),
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
          // jobType: Yup.string()
          //   // specify the set of valid values for job type
          //   // @see http://bit.ly/yup-mixed-oneOf
          //   .oneOf(["Hadapsar", "Wanowrie", "Dhankawadi"], "Invalid Area")
          //   .required("Required"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form className="cust">
        <h1 className="cust_text">Sign Up as a Customer</h1>

          <MyTextInput
            label="Name"
            name="Name"
            type="text"
            placeholder="Enter Your Name"
            className="cust_input"
          />
          
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
          
          <MyTextInput
            label="Phone Number"
            name="phNumber"
            type="text"
            placeholder="0000000000"
            className="cust_input"
          />
          <MyTextInput
            label="Pin Code"
            name="pin"
            type="text"
            placeholder="000000"
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

          <label className="cust_login_label" htmlFor="password">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your password"
            className="cust_input"
          />   
          
          <MyCheckbox name="acceptedTerms">
             I accept the terms and conditions
          </MyCheckbox>
          <br></br>
          

          <button type="submit" className="cust_btn" >Submit</button>

          <p>
          Already have an account?? <a href="/custs/login">Sign In </a>Instead
          </p>

        </Form>
      </Formik>

      
    </>
  );
};
export default CustsSignUpForm;
