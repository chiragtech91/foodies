import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {
    const [authState, setAuthState] = useState('Sign Up')
  return (
    <div className='login-popup'>
        <form action="" className='login-popup-container'>
            <div className="login-popup-title">
                <h2>{authState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />                
            </div>
            <div className="login-popup-inputs">
                {authState === 'Sign Up' && <input type="text" placeholder='Your Name' required />}
                <input type="email" placeholder='Your Email' required />
                <input type="password" placeholder='Password' required />
            </div>
            <button>{authState === 'Sign Up' ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy.</p>
            </div>
            {authState === 'Sign Up' ? <p>Aleady have an account? <span onClick={()=>setAuthState('Login')}>Login here</span></p>
            :
            <p>Create a new account? <span onClick={()=>setAuthState('Sign Up')}>Click here</span></p>
            }
            
        </form>
    </div>
  )
}

export default LoginPopup