
import React from 'react'
import Image from 'next/image'; 
import undraw_contact from "../../public/Assets/course image/undraw-contact.png"

const page = () => {
  return (
    <div className="py-5  container">
     
<div className="content">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3 className="heading mb-4">Let's talk about everything!</h3>
            <p>Connecting people with knowledge</p>
            
            <p><Image src={undraw_contact} alt="Image" className="img-fluid" /></p>
          </div>
          <div className="col-md-6">
            <form className="mb-5" method="post" id="contactForm" name="contactForm ">
              <div className ="row ">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control error" name="name" id="name" placeholder="Your name" aria-required="true" aria-invalid="true" /><label id="name-error" className="error" htmlFor="name"></label>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control error" name="email" id="email" placeholder="Email" aria-required="true" aria-invalid="true" /><label id="email-error" className="error" htmlFor="email"></label>
                </div>
              </div>
              
              <div className="row">
                <div className="col-md-12 form-group">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                </div> 

              </div>
              
              <div className="row">
                <div className="col-md-12 form-group">
                  <textarea className="form-control error" name="message" id="message" cols={30} rows={7} placeholder="Write your message" aria-required="true" aria-invalid="true" defaultValue={""} /><label id="message-error" className="error" htmlFor="message"></label>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <input type="submit" defaultValue="Send Message" className="btn btn-primary rounded-0 py-2 px-4" />
                  <span className="submitting" />
                </div>
              </div>
            </form>
            <div id="form-message-warning mt-4" />
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default page
