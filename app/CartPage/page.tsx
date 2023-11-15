"use client";
import React from "react";
import Image from "next/image";
import "./main.css";
import DeafultButton from "../Components/DeafultButton/DeafultButton";
// import ReactStars from "react-stars";
import img4 from "../../public/American_Express-Logo.wine.svg";
import img5 from "../../public/mastercard-3-svgrepo-com.svg";
import img6 from "../../public/Visa Payment Card.svg";
import img7 from "../../public/paypal-svgrepo-com.svg";
import img8 from "../../public/mmm.png";

const Cart = () => {
  return (
    <div className="container-fluide  ">
      <div className="container-fluide">
        <div className="row">
          {/*START main */}

          <div className=" bg-light rounded-5 shadow-lg m-5 col-lg-7 p-5 mx-4 ">
            <div>
              <h3>
                <b>Checkout</b>
              </h3>
              <h6>chart type</h6>
            </div>

            <form action="#">
              <div>
                <Image
                  className="rounded-5 align-center mx-5 my-5"
                  src={img4}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />

                <Image
                  className="rounded-5 align-center mx-5 my-5 "
                  src={img5}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />

                <Image
                  className="rounded-5 align-center mx-5 my-5 "
                  src={img6}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <Image
                  className="rounded-5 align-center mx-5 my-5 "
                  src={img7}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>

              <div>
                <label>Name on card</label>
                <input
                  className="form-control my-3 w-100  rounded-3 "
                  required
                  type="text"
                  placeholder="Enter name on card"
                />
              </div>

              <div>
                <label>Card Number </label>
                <input
                  className="form-control my-3 w-100  rounded-3  "
                  required
                  type="number"
                  placeholder="Card Number"
                />
              </div>
              <div className=" row ">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="col-5">
                    <label>Expiration Data (MM / DD / YY) </label>
                    <input
                      className="form-control my-3 w-100   rounded-3  "
                      required
                      type="date"
                      placeholder="Card Number"
                    />
                  </div>
                  <div className="col-5">
                    <label>CVC</label>
                    <input
                      className="form-control my-3 w-100  rounded-3  "
                      required
                      type="number"
                      placeholder="Card Number"
                    />
                  </div>
                </div>
              </div>
              <div className="Container m-4 ">
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="Update Password"
                  handleClick={() => {
                    window.location.href = "";
                  }}
                />
              </div>
            </form>
          </div>

          {/* START aside */}
          <div className="container aside shadow-lg  col-lg-4  p-4  mx-2 my-5 rounded-5 ">
            <h3>Summary </h3>
            <hr />
            <div className="row">
              <div className="col mx-2">
                <Image
                  className="img  p-1 mb-5 bg-light"
                  src={img8}
                  alt=""
                  
                />
              </div>
              <div className="col">
                <h5>
                  <b>Lorem ipsum dolor sit amet.</b>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam sequi harum{" "}
                </p>
                <h4>$ 24.25</h4>
              </div>{" "}
            </div>
            <hr />
            <div className="row">
              <div className="col mx-2">
                <Image
                  className="img  p-1 mb-5 bg-light"
                  src={img8}   
                                 alt=""
                />
              </div>
              <div className="col">
                <h5>
                  <b>Lorem ipsum dolor sit amet.</b>
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam sequi harum{" "}
                </p>
                <h4>$ 24.25</h4>
              </div>{" "}
            </div>

            <hr />
            <div className="d-flex  justify-content-between">
              <h6>Subtotal</h6> <h6>$ 51.38</h6>
            </div>
            <hr />
            <div className="d-flex  justify-content-between">
              <h6>Coupon discount</h6> <h6>0 %</h6>
            </div>
            <hr />
            <div className="d-flex  justify-content-between">
              <h6>TAX </h6> <h6>5</h6>
            </div>
            <hr />
            <div className="d-flex  justify-content-between">
              <h5>
                <b>TOTAL</b>
              </h5>{" "}
              <h5>$ 56.38</h5>
            </div>
          </div>
        </div>
      </div>

      {/* START Section2 */}

      <div className="container-fluide">
        <div className=" text-center col-12  my-5 mb-5 mt-5 ">
          <h2>Top Education Offers and deals are listed here</h2>
        </div>

        <div className="row text-light section2  justify-content-around ">
          <div className="col-lg-3 col-md-5 mx-2">
            <p>50%</p>
            <h3>FOR INSTRUCTORS</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore
          </div>
          <div className="col-lg-3 col-md-5 mx-2">
            <p>50%</p>
            <h3>FOR INSTRUCTORS</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore
          </div>
          <div className="col-lg-3 col-md-5 mx-2">
            <p>50%</p>
            <h3>FOR INSTRUCTORS</h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Harum nobis
            dicta, ea quisquam accusamus error nesciunt minima dolore
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
