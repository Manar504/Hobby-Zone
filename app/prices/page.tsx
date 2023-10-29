import React from "react";
import Image from "next/image";
import img from "../../public/check-lg.svg";
import img1 from "../../public/x.svg";

const Prices = () => {
  return (
    <div>
      <h1 style={{ padding: "20px", textAlign: "center", color: "#0a12ea" }}>
        <b>The Right Plan for Your Courses</b>
      </h1>
      <p
        style={{ textAlign: "center", color: "#0a12ea", marginBottom: "70px" }}
      >
        We have Several PowerFul plans to showcase your Courses and get
        discovered as a creative roadmaps.Everything you need
      </p>

      <div className="container-fluid">
        <div className="row row-cols-12 row-cols-md-4 mb-4 text-center">
          <div className="col-lg-3  col-md-4 col-sm-6   card1">
            <div className="card mb-4 rounded-4 shadow-sm  ">
              <div className="card-body">
                <h4 style={{ textAlign: "left" }}>
                  <b>Intro</b>
                </h4>
                <ul className="list-unstyled " style={{ padding: "10px" }}>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Upload Video Up to 720p Resolution
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Attachment & post Scheduling
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image> Set
                    your rates
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Exclusive Deals
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Advanced Statics
                  </li>
                </ul>
                <h1 className="card-title pricing-card-title">
                  $123<small className="text-muted fw-light">/month</small>
                </h1>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-secondary"
                >
                  choose
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3  col-md-4 col-sm-6    card1">
            <div className="card mb-4 rounded-4 shadow-sm  ">
              <div className="card-body">
                <h4 style={{ textAlign: "left" }}>
                  <b>Base</b>
                </h4>
                <ul className="list-unstyled " style={{ padding: "10px" }}>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Upload Video Up HD Resolution
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Attachment & post Scheduling
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image> Set
                    your rates
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Exclusive Deals
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image
                      className="ms-auto"
                      src={img1}
                      alt="dks"
                    ></Image>{" "}
                    Advanced Statics
                  </li>
                </ul>
                <h1 className="card-title pricing-card-title">
                  $123<small className="text-muted fw-light">/month</small>
                </h1>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-secondary"
                >
                  choose
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3  col-md-4 col-sm-6  "
            style={{ marginTop: "-25px" }}
          >
            <div className="card mb-4 rounded-4 shadow-sm  card2 ">
              <div className="card-body">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h4 style={{ textAlign: "left" }}>
                    <b>Pro</b>
                  </h4>
                  <button
                    style={{
                      padding: "3px",
                      width: "100px",
                      color: "#7514fc",
                      borderRadius: "10px",
                    }}
                  >
                    Save $40
                  </button>
                </div>
                <ul className="list-unstyled " style={{ padding: "10px" }}>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Upload Video Up HD Resolution
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Attachment & post Scheduling
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image> Set
                    your rates
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Exclusive Deals
                  </li>
                  <li
                    style={{ textAlign: "left", opacity: 0.5, height: "40px" }}
                  >
                    {" "}
                    <Image
                      className="ms-auto"
                      src={img1}
                      alt="dks"
                    ></Image>{" "}
                    Advanced Statics
                  </li>
                </ul>
                <h1 className="card-title pricing-card-title">
                  $123
                  <small className="text-muted fw-light text-white-50">
                    /month
                  </small>
                </h1>
                <button type="button" className="w-100 btn btn-lg btn-primary">
                  Try 1 month
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6    card1">
            <div className="card mb-4 rounded-4 shadow-sm  ">
              <div className="card-body">
                <h4 style={{ textAlign: "left" }}>
                  <b>Enterprise</b>
                </h4>
                <ul className="list-unstyled " style={{ padding: "10px" }}>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Upload Video With 4k Resolution
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Attachment & post Scheduling
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image> Set
                    your rates
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Exclusive Deals
                  </li>
                  <li style={{ textAlign: "left", height: "40px" }}>
                    {" "}
                    <Image className="ms-auto" src={img} alt="dks"></Image>{" "}
                    Advanced Statics
                  </li>
                </ul>
                <h1 className="card-title pricing-card-title">
                  $123<small className="text-muted fw-light">/month</small>
                </h1>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-secondary "
                >
                  choose
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
