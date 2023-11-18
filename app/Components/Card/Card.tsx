import React from 'react';
import Image, { StaticImageData } from 'next/image';
import DeafultButton from '../DeafultButton/DeafultButton';

type CardProps = {
  Image: string;
  title: string;
  pra: string;
  progresswidth?: string; 
};

const Card = (props: CardProps) => {
  return (
    <div className="card border-0">
      <img
     
        src={props.Image}
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.pra}</p>
       { props.progresswidth == null ?  <></> :<div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: props.progresswidth }}
            aria-valuenow={parseInt(props.progresswidth!, 30)} // Assuming width is a string representing a number
            aria-valuemin={0}
            aria-valuemax={100}
          /> 
        </div>   }
        <button className="custom-btn btn-8 m-0 "><span>Join Now</span></button>
        {/* <DeafultButton
        bg='#491A85'
          color='white'
          text="Join Class"
          width="150px"
          handleClick={(e) => {
            e.preventDefault();
            console.log("manar");
            window.location.href="/CourseDetails"
          }}
        /> */
        
        }
       

      </div>
    </div>
  );
};

export default Card;

