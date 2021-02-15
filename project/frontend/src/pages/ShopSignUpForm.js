import React, { useEffect,useState } from "react";
import './ShopLoginSignUpForm.css'
import axios from './../axios/axios'



// And now we can use these
const ShopSignUpForm = () => {
  const [data,setData] = useState({
    name:"",
    shop_name:"",
    email:"",
    phone:"",
    pin:"",
    password:"",
    confirmPassword:""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/shops/signup',data);
    console.log(response)
  }

    const handleChange = (e) => {
      setData({
        ...data,
        [e.target.name] : e.target.value
      })
      console.log(data)
    }
  return (

        <form className="shop" onSubmit={handleSubmit}>

        <h1 className="shop_text">Sign Up as a Shopkeeper</h1>
          <input
            label="Name"
            name="name"
            type="text"
            value={data.name}
            placeholder="Enter Your Name"
            className="shop_input"
            onChange={handleChange}

          />
          <input
            label="Shop Name"
            name="shop_name"
            type="text"
            value={data.shop_name}
            placeholder="Enter your Shop Name"
            className="shop_input"
            onChange={handleChange}

          />
          <input
            label="Email Address"
            name="email"
            type="email"
            value={data.email}
            placeholder="Enter your email"
            className="shop_input"
            onChange={handleChange}

          />
          <input
            label="Phone Number"
            name="phone"
            type="text"
            value={data.phone}
            placeholder="0000000000"
            className="shop_input"
            onChange={handleChange}

          />

          <input
            label="Pin Code"
            name="pin"
            type="text"
            value={data.pin}
            placeholder="000000"
            className="shop_input"
            onChange={handleChange}

          />

          <label className="shop_label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={data.password}
            placeholder="Enter your password"
            className="shop_input"
            onChange={handleChange}

          />

          <label className="shop_label" htmlFor="password">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={data.confirmPassword}
            placeholder="Enter your password"
            className="shop_input"
            onChange={handleChange}

          />
          
          {/* <MyCheckbox name="acceptedTerms">
            I accept the terms and conditions
          </MyCheckbox> */}

          <button type="submit" className="shop_btn">Submit</button>

          <p>
        Already have an account?? <a href="/shops/signin">Sign In </a>Instead
      </p>
        </form>

      
  );
};
export default ShopSignUpForm;
