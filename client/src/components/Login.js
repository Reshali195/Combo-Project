import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div>
        <div className="register-photo">
        <div className="form-container">
        <div className="image-holder"></div>
        <form method="post">
            <h2 className="text-center"><strong>Welcome back!</strong></h2>
            <div className="form-group"><input className="form-control" type="Username" name="Username" placeholder="Username" /></div>
            <div className="form-group"><input className="form-control" type="password" name="password" placeholder="Password" /></div>
            <div className="form-group">
                <div className=" mt-3 mb-3 d-flex justify-content-between">
                   <div class="form-check"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> <label class="form-check-label" for="flexCheckDefault"> Remember me </label> </div>
                   <div> <NavLink to="/forgot" className="text-info">Forgot Password</NavLink> </div>
               </div>
            </div>
            <div className="mb-3 form-group"><button class=" w-100 btn btn-success btn-block btn-info" type="submit"><NavLink className="already" to="/">Login</NavLink></button></div>Terms of Use and Privacy Policy
            <NavLink class="already mt-3" to="/signup">You don't have an account? <span class="text-primary">Create account here</span>.</NavLink>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Login