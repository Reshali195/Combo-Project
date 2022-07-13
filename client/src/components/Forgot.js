import React from 'react'
import { NavLink } from 'react-router-dom'

const Forgot = () => {
  return (
    <div>
        <div>
        <div className="register-photo">
        <div className="form-container">
        <form method="post">
            <h2 className="text-center"><strong>Forgot Password</strong></h2>
            <div className=" mb-4 form-group"><input className="form-control" type="Username" name="Username" placeholder="Username" /></div>
            <div align="center" className="mb-3 form-group"><button className=" w-90 btn btn-success btn-block btn-info" type="submit"><NavLink className="already" to="/login">Reset Password</NavLink></button></div>
            <NavLink className="already mt-3" to="/signup">Don't have an account? <span className="text-primary">SignUp</span>.</NavLink>
        </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Forgot