import React,{useState} from "react";


export default function Login_Y() {
  const Mcenr = {
    
      maxwidth: '300px',
      margin: 'auto',
      padding: '20px',
      border: '1px solid',
      borderradius: '5px',
      boxshadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  }
  const Lcent = {
    
      display: 'block',
      marginbottom: '5px',
      fontweight: 'bold'
  }

    const bottomButton = {
      width:'100px' // adjust the width as nessecary 
    }
    const L1 = {
      margin:'15px'
    }
    const I2 = {
      width: '100%',
  padding: '8px',
  border: '1px solid' ,
  borderRadius: '4px',
  boxSizing: 'borderBox'

    }
    const ButtC = {
      backgroundColor: '4caf50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
    }

  return (
    <>
    
    
    <div className=" mx-5 container my-3 " >
    <h1>Welcome Back</h1>
    </div>
    
    <div className="Login-container " style={Mcenr}>
    <h3>Login</h3>
    <form action="/login" method="post" >
        <div className="input-group my-3">
          <input
            type="text"
            id="username"
            name="password"
            placeholder="UserName"
            required
            style={L1}
            />

          <label htmlFor="username" style={Lcent}></label>
        </div>

        <div className="input-group my-3" style={I2}>
          <label htmlFor="password" ></label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            
            required
          />
          <a className="input-group" type="submit">Forgotten Password</a>
        </div>
        <button className="container " type="submit" style = {ButtC} >Login</button>
        
        
        
      
        </form> 
      </div>
     
    </>
  );
}
