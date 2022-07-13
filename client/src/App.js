import React from 'react'
import './App.css'
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About'
import Contact from './components/Contact';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgot from './components/Forgot';
import Services from './components/Services';
import Errorpage from './components/Errorpage';
// import Mini from './components/mini.html';


const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>
      <Route path='/forgot'>
        <Forgot />
      </Route>
      <Route path='/services'>
        <Services />
      </Route>
      <Route path='/error'>
        <Errorpage/>
      </Route>
      {/* <Route path='/mini'>
        <a src={Mini}></a>
      </Route> */}
      {/* <Route exact path="/mini.html" render={() => {window.location.href="mini.html"}} /> */}
    </div>
  )
}

export default App

