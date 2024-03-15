import React from 'react'
import { Link } from 'react-router-dom';
const ButtC = {

    backgroundColor: 'white',
    color: 'black',
    borderRadius: '20px',
    height:'45px'
};
const ButtC1 = {
    backgroundColor:'gray',
    borderRadius:'20px',
    height:'45px',
}
const ButtC2 = {
    backgroundColor:'blue',
    borderRadius:'20px',
    height:'45px',
    color:'white'

}
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


const logoStyles = {
    // Add any additional logo styles here
    marginRight: '10px', // Adjust spacing between logo and text
    width: '25px', // Set the desired width for your logo
    height: '25px', // Set the desired height for your logo
    justifyContent:'right'
};

const formStyles = {
    position: 'absolute', // Change this value to control the positioning of the inner div
    top: '50%', // Adjust the top position
    left: '75%', // Adjust the left position
    transform: 'translate(-50%, -50%)', // Center the div using translate
    backgroundColor: 'white',
    padding: '19px',
    width: '45%',
    borderRadius: '10px'
};
const inputStyles = {
    width: '100%', // Adjust the width of the input box
    padding: '8px', // Adjust the padding as needed
    marginBottom: '10px', // Adjust the spacing between inputs
    borderRadius: '10px',
    left:'30%'
};
const labelStyles = {
    marginBottom: '5px', // Adjust the spacing between labels and inputs
};
const Forgottenb = {
    position:'',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '15px',
    left:'10%',
    top:'50%'
}
const logoStyles1 = {
    position: 'absolute',
    top: '50%',
    left: '25%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '100%',
    borderRadius:'20px 200px 200px 20px'
}


function SignIn() {
    return (
        
        <div className='  Login-container ' style={containerStyles} >
        <img style={logoStyles1}  src="https://st3.depositphotos.com/4230659/17096/v/450/depositphotos_170965046-stock-illustration-vector-illustration-city-parking-lot.jpg" />
            

            <form action='/login' method='login' style={formStyles}>

                <div className='input-group my-3'>
                    <label htmlFor='Username' style={labelStyles}></label>
                    <input
                        type='text'
                        id='username'
                        name='password'
                        placeholder='Email address or phone number'
                        required style={inputStyles} /></div>

                <div className='input-group my-3'>
                    <label htmlFor='password' style={labelStyles}></label>
                    <input type='password'
                        id='password'
                        name='password'
                        placeholder='Password'
                        required style={inputStyles} />
                </div>
                <div  style={Forgottenb}>

                    <Link  to = "/forgotPassword"className='input-group' type='submit'>
                        Forgotten password?
                    </Link>
                    <Link to="/SignIn" className='input-group' style={Forgottenb} type='submit'>
                        Don't have account
                    </Link>
                </div>
<div>
                <button className='primary my-2 container' type='submit' style={ButtC}> Login with  <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' alt='logo' style={logoStyles} /></button>
                <button className='primary my-2 container ' type='submit' style={ButtC2}> Login with <img className='logo' src='https://1000logos.net/wp-content/uploads/2017/02/Facebook-Logosu.png' alt='logo' style={logoStyles} /></button>
                <button className='primary my-2 container' type='submit' style={ButtC1}> Login with <img className='logo' src='https://i.pinimg.com/736x/99/65/5e/99655e9fe24eb0a7ea38de683cedb735.jpg' alt='logo' style={logoStyles} /></button>
                </div>
            
            </form>
        </div>
    )
}

export default SignIn