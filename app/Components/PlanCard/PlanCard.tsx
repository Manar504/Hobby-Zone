"use client";

import React from "react";
import Image from "next/image";
import img from "../../../public/check-lg.svg";
import img1 from "../../../public/x.svg";
import "./PlanCard.css";
import { useState } from "react";

type defaultProps = {
  type: string;
  resulution: string;
  isAttachment: boolean;
  supportRates: boolean;
  deal: boolean;
  isAdvanced: boolean;
  price: string;
  saving: string;
};
const buttonText = ["Choose", "Try it Now"];

const PlanCard = (props: defaultProps) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <div className="planCard col-lg-3  col-md-4 col-sm-6    card1">
      <div
        className="card mb-4 rounded-4 shadow-sm  "
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      >
        <div className="card-body">
          {hover ? (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                Save ${props.saving}
              </button>
            </div>
          ) : (
            <h4 style={{ textAlign: "left" }}>
              <b>{props.type}</b>
            </h4>
          )}

          <ul className="list-unstyled " style={{ padding: "10px" }}>
            <li style={{ textAlign: "left", height: "40px" }}>
              <Image className="ms-auto" src={img} alt="dks"></Image> Upload
              Video Up {props.resulution} Resolution
            </li>

            <li style={{ textAlign: "left", height: "40px" }}>
              <Image
                className="ms-auto"
                src={props.isAttachment ? img : img1}
                alt="dks"
              ></Image>{" "}
              Attachment & post Scheduling
            </li>
            <li style={{ textAlign: "left", opacity: 0.5, height: "40px" }}>
              {" "}
              <Image
                className="ms-auto"
                src={props.supportRates ? img : img1}
                alt="dks"
              ></Image>{" "}
              Set your rates
            </li>
            <li style={{ textAlign: "left", opacity: 0.5, height: "40px" }}>
              {" "}
              <Image
                className="ms-auto"
                src={props.deal ? img : img1}
                alt="dks"
              ></Image>{" "}
              Exclusive Deals
            </li>
            <li style={{ textAlign: "left", opacity: 0.5, height: "40px" }}>
              {" "}
              <Image
                className="ms-auto"
                src={props.isAdvanced ? img : img1}
                alt="dks"
              ></Image>{" "}
              Advanced Statics
            </li>
          </ul>
          <h1 className="card-title pricing-card-title">
            ${props.price}
            <small className="text-muted fw-light">/month</small>
          </h1>
          <button
            type="button"
            className="w-100 btn btn-lg btn-outline-secondary"
          >
            {hover ? buttonText[1] : buttonText[0]}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
