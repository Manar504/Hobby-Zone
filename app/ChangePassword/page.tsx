"use client";
import React from "react";
import "./main.css";
import Image from "next/image";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
import S from "../../public/s.png";

const ChangePassword = () => {
  return (
    <div
      className=" main col-lg-6 col-md-8 col-sm-10 p-1 bg-white text-dark text-center  
          rounded-5 shadow-xl w-2 mx-auto"
    >
      <div className="row ">
        <div className="col-sm-12 mt-5 ">
          <h1>Change Your Password</h1>
          <p className="mt-3">
            please Enter your current password and new password reset your
            password.
          </p>
          <form>
            <div className="form-group mt-5">
              {/* <label htmlFor="email">Email</label> */}
              <input
                type="password"
                className="container-fluid  form-control mb-4"
                id="password"
                required
                placeholder="Current password"
              />

              <input
                type="password"
                className="container-fluid  form-control mb-3 mt-4"
                id="new password"
                required
                placeholder="New password"
              />
            
            <input
                type="password"
                className="container-fluid  form-control mb-4 mt-5"
                id="Confirm new password"
                required
                placeholder="Confirm New password"
              />
              <div className="Container m-4">
              <DeafultButton
                bg=" rgb(77, 12, 138)"
                text="Update Password"
                handleClick={() => {
                  window.location.href = "/Home";
                }}
              /></div>
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

export default ChangePassword;