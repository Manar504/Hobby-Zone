import React from "react";
import Image, { StaticImageData } from "next/image";
import DeafultButton from "../DeafultButton/DeafultButton";

type CardProps = {
  Image: StaticImageData;
  title: string;
  pra: string;
  width?: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <Image
        src={props.Image}
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.pra}</p>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: props.width }}
            aria-valuenow={parseInt(props.width!, 10)} // Assuming width is a string representing a number
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        <DeafultButton
          bg="#2945FF"
          text="Join Class"
          width="200px"
          handleClick={(e) => {
            e.preventDefault();
            console.log("manar");
            window.location.href="/CourseDetails"
          }}
        />
      </div>
    </div>
  );
};

export default Card;
