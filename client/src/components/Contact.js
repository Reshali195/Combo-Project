import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
        <div className="register-photo">
        <div className="w-70 form-container">
        <form method="post">
        <div class="row mt-0">
                            <div class="col-md-12 ">
                                <h4 class="">Contact Us</h4>
                                <p>Use the form below to share your questions, ideas, comments and feedback</p>
                            </div>
                        </div>
                       

                          <div class="col-lg-9 col-md-7 col-sm-12 d-flex justify-content-between">
                              <div className='pe-15 mt-3 mb-4'> <label for="email">Email</label> <input type="text" class="form-control" id="email-id" placeholder="Enter email Id" /></div>  
                             <div> <div class=" mt-3 mb-4 form-group"><label for="Mobile-Number">Mobile Number</label> <input type="text" class="form-control" id="Mobile-Number" placeholder="Enter mobile no" /></div></div>  
                      

                        </div>
                        <div class=" mb-3 form-group row">
                            <div class="col-md-12 mb-2">
                                <p class="mb-1">Message</p> <textarea id="message" type="text" placeholder="Enter your message" name="message" class="form-control input-box rm-border" ></textarea>
                            </div>
                        </div>
                        
            <div align="center" className="mb-3 form-group"><button className=" w-90 btn btn-success btn-block btn-info" type="submit"><NavLink className="already" to="/login">Send Message</NavLink></button></div>
        </form>
        </div>
        </div>
    </div>
  )
}

export default Contact