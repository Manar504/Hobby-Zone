"use client";
import React from "react";
import Image from "next/image";
import "./forget.css";
import S from "../../public/s.png";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
import { metadata } from "../layout";
const forgetting = () => {
  return (
    <div
      className=" main col-lg-6 col-md-8 col-sm-10 p-1 bg-white text-dark text-center  
      rounded-5 shadow-xl w-2 mx-auto"
    >
      <div className="row ">
        <div className="col-sm-12 mt-5 ">
          <h1>Forget Your Password</h1>
          <p className="mt-3">
            Enter your email and we will send you a link to reset your password.
          </p>
          <form>
            <div className="form-group mt-5">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="email"
                className="container-fluid  form-control mb-3"
                id="email"
                required
                placeholder="name@example.com"
              />
              <DeafultButton
                bg=" rgb(77, 12, 138)"
                text="Send"
                handleClick={() => {
                  window.location.href = "";
                }}
              />

              <h2> Please check your email</h2>
              <p>we've sent code to .....name@example.com</p>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control mb-4"
                  id="code"
                  required
                  placeholder="Code...."
                />
              </div>

              <DeafultButton
                bg=" rgb(77, 12, 138)"
                text="Verify"
                handleClick={() => {
                  window.location.href = "/ResetPage";
                }}
              />

              <p> Resend code after 20 sec</p>
              <button
                className="btn my-2 col-8 p-2 text-light rounded-5 "
                style={{ backgroundColor: "rgb(77, 12, 138)" }}
              >
                Resend
              </button>
            </div>
            <div className="form-group">
              <p>
                Already have an account? <a href="/Login">Login</a>
              </p>
            </div>
            <div className="form-group">
              <p>
                Dont have an account? <a href="/Register">Register</a>
              </p>
            </div>
          </form>
          <div>
            <Image
              className="container col-sm-12 "
              src={S}
              alt="Picture of the author"
            />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default forgetting;
