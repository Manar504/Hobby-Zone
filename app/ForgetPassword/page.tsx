"use client";
import React from "react";
import Image from "next/image";
import "./forget.css";
import S from "../../public/s.png";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
import { metadata } from "../layout";
import DeafultInput from "../Components/DeafultInput/Input";
import Otpinput from "../Components/Otpinput/OtpInput";

const forgetting = () => {
  return (
    <div className=" container">
      <div className="row ">
        <div className="col-md-5 col-sm-12 p-5 ">
          <h3>Forget Your Password</h3>
          <p className="mb-5">Enter your email and you will recive an OTP</p>
          <form>
            <div className="form-group mt-1">
              <DeafultInput label="Email" type="Email" />

              <DeafultButton
                bg=" rgb(77, 12, 138)"
                text="Send Code"
                handleClick={() => {
                  window.location.href = "";
                }}
                color="white"
              />

              <h4> Please check your email</h4>
              <p>we've sent code to .....name@example.com</p>
              <div className="form-group">
                <Otpinput />
              </div>

              <DeafultButton
                bg=" rgb(77, 12, 138)"
                text="Verify"
                color="white"
                handleClick={() => {
                  window.location.href = "/ResetPage";
                }}
              />

              <p> Resend code after 20 sec</p>
              <button
                className="btn my-2 col-8 p-2 text-light rounded-3 "
                style={{ backgroundColor: "rgb(77, 12, 138)" }}
              >
                Resend
              </button>
            </div>
          </form>{" "}
        </div>
        <div className="order-md-last col-md-6 d-flex flex-column justify-content-center align-items-center my-sm-4">
          <Image
            className="container col-sm-12 "
            src={S}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
};

export default forgetting;
