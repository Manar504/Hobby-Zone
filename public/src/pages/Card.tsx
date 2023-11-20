import { FunctionComponent } from "react";
import "./Card.css";

const Card: FunctionComponent = () => {
  return (
    <div className="card">
      <div className="book-new-one-2-wrapper">
        <img className="book-new-one-2" alt="" src="/book-new-one-2@2x.png" />
      </div>
      <div className="what-is-oclock-now-wrapper">
        <b className="what-is-oclock">What is o'clock now?</b>
      </div>
      <div className="btn-round">
        <img className="iconheart" alt="" src="/iconheart.svg" />
      </div>
    </div>
  );
};

export default Card;
