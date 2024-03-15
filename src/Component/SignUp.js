import React from "react";
import { Link } from "react-router-dom";
const ButtC2 = {
  backgroundColor:'blue',
  borderRadius:'20px',
  height:'45px',
  color:'white'
}
const ButtC1 = {
  backgroundColor:'white',
  borderRadius:"20px",
  height:'45px',
  color:'black'
}
const formStyles = {
  position: 'absolute', // Change this value to control the positioning of the inner div
  top: '50%', // Adjust the top position
  left: '25%', // Adjust the left position
  transform: 'translate(-50%, -50%)', // Center the div using translate
  backgroundColor: 'white',
  padding: '30px',
  width: '45%',
  borderRadius: '10px',
};
const containerStyles = {
  left:"20%",
  top:'10%',
  position:'absolute',
  margin: '20px',
  backgroundColor: 'lightblue',
  width: '50%', // Adjust the width as needed
  height: '65%', // Adjust the height as needed
  borderRadius:'30px'
};
const inputStyles = {
  width: '100%', // Adjust the width of the input box
  padding: '8px', // Adjust the padding as needed
  marginBottom: '10px', // Adjust the spacing between inputs
  borderRadius: '10px',
  left:'30%'
}
const labelStyles = {
  marginBottom: '5px', // Adjust the spacing between labels and inputs
};
const logoStyles = {
  // Add any additional logo styles here
  marginRight: '10px', // Adjust spacing between logo and text
  width: '85px', // Set the desired width for your logo
  height: '40px', // Set the desired height for your logo
  justifyContent:'right'
};
const logoStyles1 = {
  position: 'absolute',
  top: '50%',
  left: '75%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '100%',
  borderRadius:'200px 20px 20px 200px'
}



export default function SignUp() {
  return (
    <>
    <div className="container" style={containerStyles}>
    <img style={logoStyles1}  src="https://st3.depositphotos.com/4230659/17096/v/450/depositphotos_170965046-stock-illustration-vector-illustration-city-parking-lot.jpg" alt="..." />

      <form action="/signup" method="post" style={formStyles}>

        <div className="input-group my-2" >
        <label htmlFor="First name " style={labelStyles}> </label>
        <input
          type="text"
          id="First name"
          name="First name"
          placeholder="Your Name"
          required style={inputStyles}
        /></div>
<div className="input-group my-2">
        <label htmlFor="email" style={labelStyles}></label>
        <input type="text" id="email" placeholder="example@gmail.com" style={inputStyles} /></div>
<div className="input-group my-2">
        <label htmlFor="Set Password" style={labelStyles}></label>
        <input
          type="password"
          id="password"
          name="Set Password"
          placeholder="Password"
          style={inputStyles}
        /></div>
        <div>

        <label htmlFor="confirm password" style={labelStyles}></label>
        <input
          type="password"
          id="password"
          name="confirm password"
          placeholder="confirm password"
        style={inputStyles}
        />
        </div>
        <div>
          <a>
            <button className="container " style={ButtC2}>Sign Up</button>
          </a>
        </div>
        <div>
          <a>
            <button className="container my-2 " style={ButtC1}>Continue with <img src="https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/06/auto-delete-old-messages-in-gmail-img.webp?ssl=1&quality=80&w=f" alt="logo" style={logoStyles} /></button>
          </a>
        </div>
        <div>
          <Link to="/signIn"className="text my-1" type="submit">already have account</Link>
        </div>
      </form>
      </div>
    </>
  );
}
