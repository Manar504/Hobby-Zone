import React from "react";
import Image from "next/image";
import img from "../../public/check-lg.svg";
import img1 from "../../public/x.svg";
import PlanCard from "../Components/PlanCard/PlanCard";

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
          <PlanCard
            type={"Intro"}
            resulution={"720p"}
            isAttachment={false}
            supportRates={false}
            deal={false}
            isAdvanced={false}
            price={"30"}
            saving={"0"}
          />

          <PlanCard
            type={"Base"}
            resulution={"HD"}
            isAttachment={true}
            supportRates={true}
            deal={false}
            isAdvanced={false}
            price={"45"}
            saving={"5"}
          />

          <PlanCard
            type={"Pro"}
            resulution={"UHD"}
            isAttachment={true}
            supportRates={true}
            deal={true}
            isAdvanced={false}
            price={"60"}
            saving={"10"}
          />

          <PlanCard
            type={"Enterprise"}
            resulution={"4K"}
            isAttachment={true}
            supportRates={true}
            deal={true}
            isAdvanced={true}
            price={"75"}
            saving={"15"}
          />
        </div>
      </div>
    </div>
  );
};

export default Prices;
