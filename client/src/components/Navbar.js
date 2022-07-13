import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import  { Redirect } from 'react-router-dom'
// import ReactDOM from 'react-dom/client';
import { NavLink } from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';
// import App from '../App';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink class="navbar-brand" to="#">Navbar</NavLink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
      </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li class="nav-item dropdown">
        <NavLink to='/home' class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         Products
        </NavLink>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <NavLink class="dropdown-item" to="/">Game</NavLink>
          {/* <NavLink class="dropdown-item" ropdowto="/mini">Minifier</NavLink> */}
         <a class="dropdown-item" href="/mini">Minifier</a> 
         {/* <Redirect to='/mini' /> */}
          <NavLink class="dropdown-item" to="/">W search Engine</NavLink>
          <NavLink class="dropdown-item" to="/">Markdown</NavLink>
          <div class="dropdown-divider"></div>
          <NavLink class="dropdown-item" to="/services">See All</NavLink>
        </div>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/login">Login/SignUp</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      
    </ul>
  </div>
</nav>
    </>
  )
}

export default Navbar

// ReactDOM.render(<Navbar />, document.getElementById("header")); 
// const root = ReactDOM.createRoot(document.getElementById('header'));
// root.render(
//        <Navbar />
// );

// If you want to staortWebVitals();rt measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();



