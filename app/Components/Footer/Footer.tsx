"use client"
import React from 'react'
import "./Footer.css"
import Link from 'next/link'
import Image from 'next/image';
import DeafultButton from "../../Components/DeafultButton/DeafultButton"


const Footer = () => {
  return (
    <div>{/* Footer */}
<footer className="text-center text-lg-start ">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <Link href={"#"} className="me-4 link-secondary">
      <i > </i> 
      </Link>
      <Link href={"#"} className="me-4 link-secondary">
        <i className="fab fa-twitter" />
      </Link>
      <Link href={"#"} className="me-4 link-secondary">
        <i className="fab fa-google" />
      </Link>
      <Link href={"#"} className="me-4 link-secondary">
        <i className="fab fa-instagram" />
      </Link>
      <Link href={"#"} className="me-4 link-secondary">
        <i > </i> 
      </Link> 

      <Link href={"#"} className="me-4 link-secondary">
        <i className="fab fa-github" />
      </Link>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section >
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 bg-white ">
          <br/>
          <h6 className="Text  text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />HOBBIES
          </h6>
          <p className="Text">
          Gravida sed justo, justo, id est et. Amet tristique convallis sed porttitor nullam eu ut. Duis et odio aliquam bibendum. Metus et lectus id viverra fringilla magna morbi. 
          </p> 
          <form className="search">
        <input className="form-control me-sm-2 px-5 rounded-5 " type="text" placeholder="Enter email" />
      </form>  
      <DeafultButton bg="#491a85" text="Subscribe" width="50%" handleClick={(e)=>{e.preventDefault();
      console.log("manar")}} />
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Angular</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Vue</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Laravel</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">Pricing</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Settings</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Orders</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Help</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary" /> New York, NY 10012, US</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary" />
            info@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary" /> + 01 234 567 88</p>
          <p><i className="fas fa-print me-3 text-secondary" /> + 01 234 567 89</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.025)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">HOBBIES.com</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </div>
  )
}

export default Footer;
