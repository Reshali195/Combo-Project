import React,{useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom'

const SignUp = () => {
  const history=useHistory();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",work
:"",password:"",cpassword:""  });

let name,value;
const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value;
  setUser({...user,[name]:value});
}

const PostData=async(e)=>{
 e.preventDefault();
 const {name,email,phone,work,password,cpassword}=user;

 const res=await fetch("/register",{
  method:"POST",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    name,email,phone,work,password,cpassword
  })
 });
 const data=await res.json();

 if(res.status===422 || !data){
  window.alert("Invalid data");
  console.log("invalid data");
 }else{
  window.alert("valid data");
  console.log("Sucess fully");
  
  history.push("/login");
 }
}


  return (
    <>
      <section className='signup'>
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className='form-title'>SignUp</h2>
              <form>
                <div class="register-photo">
                       <div class="form-container">
                           <form method="POST">
                               <h2 class="text-center"><strong>Create</strong> an account.</h2>
                               <div class="form-group"><input class="form-control" type="text" name="name"
                               value={user.name} onChange={handleInputs}
                               placeholder="Full Name" /></div>
                               <div class="form-group"><input class="form-control" type="email" name="email"
                               value={user.email} onChange={handleInputs}
                               placeholder="Email" /></div>
                               <div class="form-group"><input class="form-control" type="number" name="phone"
                               value={user.phone} onChange={handleInputs}
                               placeholder="Contact No." /></div>
                               <div class="form-group"><input class="form-control" type="text" name="work"
                               value={user.work} onChange={handleInputs}
                               placeholder="Contact No." /></div>
                               <div class="form-group"><input class="form-control" type="password" name="password"
                               value={user.password} onChange={handleInputs}
                               placeholder="Password" /></div>
                               <div class="form-group"><input class="form-control" type="password" name="cpassword"
                               value={user.cpassword} onChange={handleInputs}
                               placeholder="Confirm Password" /></div>
                               <div class="mt-3 form-group">
                                   <div class="form-check"><label class="form-check-label"><input class="form-check-input" type="checkbox" />I agree to the terms and services </label></div>
                               </div>
                               <div class="form-group"><button class=" w-100 mb-3 mt-2  w-100 btn btn-success btn-block btn-info" type="submit"id="signup" value="register" onClick={PostData} ><NavLink className="already" to="/login">Sign Up</NavLink></button></div>
                               <NavLink class="already" to="/login">Already have an account? <span class="text-primary">Login here</span>.</NavLink></form>
                               <div class="signUp-holder"></div>
                       </div>
                   </div>
               </form>
            </div>
          </div>
        </div>


      </section>
    </>
  )
}

export default SignUp