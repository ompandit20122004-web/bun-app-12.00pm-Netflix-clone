import React, { useState } from 'react'
import "./Login.css"
import logo from '../../../assets/logo.png'

const Login = () => {

  const [showPassword, setShowPassword] = useState(false)
  const [signState,setSignState] = useState("Sign In")
  return (
    <div className='login'>
      <img src={logo} className='login-logo' alt="Logo" />

      <div className='login-form'>
        <h1>{signState}</h1>

        <form>
        {signState==="Sign Up"?<input type="text" placeholder='Your name' />:<></>}
          <input type="text" placeholder='Your name' required />
          <input type="email" placeholder='Email' required />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit">{signState}</button>

          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox' id="remember" />
              <label htmlFor='remember'>Remember Me</label>
            </div>
            <p className="help">Need Help?</p>
          </div>
        </form>

        <div className='form-switch'>
        {signState==="Sign In"?
          <p>New to Netflix? <span onClick={()=>{setSignState("Sign Up")}}>Sign Up Now</span></p>
         :<p>Already have account? <span onClick={()=>{setSignState("Sign In")}}>Sign In Now</span></p>
        }
        </div>
      </div>
    </div>
  )
}

export default Login
