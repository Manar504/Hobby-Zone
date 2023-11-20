"use client";
import React from "react";
import "./main.css";
import Image from "next/image";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
import S from "../../public/s.png";
import DeafultInput from "../Components/DeafultInput/Input";

const ChangePassword = () => {
  return (
    <div
      className=" main col-lg-6 col-md-8 col-sm-10 p-1 bg-white text-dark text-center  
          rounded-5 shadow-xl w-2 mx-auto"
    >
      <div className="row ">
        <div className="col-sm-12 mt-5 ">
          <h2>Change Your Password</h2>
          <p className="mt-3">
            please Enter your current password and new password reset your
            password.
          </p>
          <form>
            <div className="form-group mt-5 ">
              <DeafultInput label="Current password" type="password" name="" id=""/>

              <DeafultInput label="New password" type="password" name="" id=""/>

              <DeafultInput label="Confirm New password" type="password" name="" id=""/>

              <button
                className="btn my-2 col-8 p-2 text-light rounded-3 "
                style={{ backgroundColor: "rgb(77, 12, 138)" }}
              >
                Update Password
              </button>
            </div>

            <div className="form-group">
              <a href="/Login">Forgot Current Password?</a>
            </div>
          </form>
          <div>
            <Image
              className="container col-sm-12 "
              src={S}
              alt="Picture of the author"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
