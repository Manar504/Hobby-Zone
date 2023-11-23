import React from 'react';
import { FiMenu, FiClock } from 'react-icons/fi';
import './main1.css';
import Image from 'next/image';


interface CardProps {
    imageSrc: string;
  designText: string;
  durationText: string;
  lorem: string;
  GirlImage: string;
  name: string;
  leftPrice: string;
  rightPrice: string;
}

const Card1: React.FC<CardProps> = ({
    imageSrc,
  designText,
  durationText,
  lorem,
  GirlImage,
  name,
  leftPrice,
  rightPrice,
}) => {
  return (
    <div className="card container-fluide m-3 p-3  col-11  rounded-5">
     <img className="card-image" src={imageSrc} alt="Card Image" />
     {/* <span> {imageSrc}</span> */}
     <div className='d-flex gap-5'>
      <div className="top-left">
        <FiMenu className="icon" /> 
        <span>{designText}</span>
      </div>
      <div className="top-right">
        <FiClock className="icon" />
        <span>{durationText}</span>
      </div>
      </div>

      <div className="bottom">
        <p>{lorem}</p>
        <div className="girl-info mx-0 justify-content-between">
          <div className='d-flex align-items-center gap-2'>
          <img className="girl-image " src={GirlImage} alt="Girl Image" />
          <h5>{name}</h5>
          </div>
          <div className="girl-details ">
            <div className="price d-flex gap-2">
              <div className="left-price gap-3"> {leftPrice} </div>{" "}
              <div className="right-price">{rightPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;