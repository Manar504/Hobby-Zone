"use client";
import React from "react";
import "./main.css";
import { ImPhone, ImMail3 } from "react-icons/im";
import DeafultButton from "../Components/DeafultButton/DeafultButton";

import {
  BsFillGeoAltFill,
  BsCaretRightSquareFill,
  BsFacebook,
} from "react-icons/bs";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
const ContactUs = () => {
  return (
    <div className="container-fluide">
      <div className="header">
        <h1>
          <b>Contact Us</b>{" "}
        </h1>
        <p> any question or remarks ? just write Us a message!</p>
      </div>

      <div className="container-fluide  bg-light rounded-5 text-light shadow-lg my-5 ">
        <div className="row">
          {/* side */}
          <div className=" side mx-3  mb-2 rounded-4 mt-2 col-lg-3">
            <h4 className="p-4">Contact information</h4>
            <h6 className="mx-4 mb-5">say something to start a live chat!</h6>

            <div className="d-flex align-items-center">
              <Link href={"#"}>
                {" "}
                <ImPhone className="icon mx-4 my-5" />
              </Link>
              <span>+2 010 118 159 28</span>
            </div>
            <div className="d-flex align-items-center">
              <Link href={"mailto:aboabdo8600@gmail.com"}>
                <ImMail3 className="icon mx-4 my-5" />
              </Link>
              <span>Demo@gmail.com</span>
            </div>
            <div className="d-flex align-items-center">
              <Link href={"#"}>
                {" "}
                <BsFillGeoAltFill className="icon mx-4 my-5" />
              </Link>
              <span>
                {" "}
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </div>
            <div className="icon">
              <Link href={"https://www.youtube.com/c/EngAbdelrahmanAbdelwahab"}>
                <BsCaretRightSquareFill className="icon mx-4 my-5" />
              </Link>
              <Link href={"https://www.facebook.com/Abdo55655"}>
                <BsFacebook className="icon mx-4 my-5" />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/abdelrahman-abdelwahab-7034b3208/"
                }
              >
                <AiFillLinkedin className="icon mx-4 my-5" />
              </Link>
            </div>
          </div>

          <div className="container-fluide  my-2 ms-5 text-dark bg-light rounded-4 mt-2 col-lg-8">
            <form action={"#"} className=" ">
              <div className="d-flex justify-content-around mt-5  ">
                <div className=" form-control">
                  <div>
                    <label>First Name</label>
                  </div>
                  <input type="text" className="inp mt-3"  required/>
                </div>
                <div className="  form-control">
                  <div>
                    <label>Last Name</label>
                  </div>
                  <input type="text" className="inp mt-3" required />
                </div>
              </div>



              <div className="d-flex justify-content-around my-5">
                <div className=" form-control ">
                  <div>
                    <label>Email</label>
                  </div>
                  <input type="email" className="inp mt-3" required />
                </div>
                <div className="  form-control">
                  <div>
                    <label>Phone Number</label>
                  </div>
                  <input type="tel" className="inp mt-3" required/>
                </div>
              </div>



              <h6>
                <b>Select Subject?</b>
              </h6>
              <br />
              <br />

              <div className="row ">
                <div className="col-lg-3   col-md-6 ">
                  <input type="radio" className="mx-2"  name="radio" value={1} />
                  <label> General Inquiry</label>
                </div>
                <div className="col-lg-3  col-md-6">
                  <input type="radio" className="mx-2"  name="radio" value={2} />
                  <label> General Inquiry</label>
                </div>
                <div className="col-lg-3  col-md-6">
                  <input type="radio" className="mx-2"  name="radio" value={3} />
                  <label> General Inquiry</label>
                </div>
                <div className="col-lg-3     col-md-6" >
                  <input type="radio" className="mx-2" name="radio" value={4} />
                  <label> General Inquiry</label>
                </div>
              </div>
              <div className="mt-5 mb-3"><label>Message:</label></div>
              <input type="text" className="form-control w-100 " required />
              <div className="Container my-5" style={{textAlign:"center" ,display:"flex" , justifyContent:"center"}}>
              <DeafultButton
                bg="rgb(73, 43, 100)"
                text="Send Message"
                width="200px"
                color="rgb(232, 222, 239)"
                handleClick={() => {
                  window.location.href="";
                }}
              /></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
