// "use client";
// import React, { useEffect } from "react";
import Image from "next/image";
import "./main.css";
import DeafultButton from "../../Components/DeafultButton/DeafultButton";
import ReactStars from "react-stars";
import img3 from "../../../public/elin.jpeg";
import img1 from "../../../public/cover.jpg";

import Card1 from "@/app/Card1/page";
import {
  FiDollarSign,
  FiCamera,
  FiTrendingUp,
  FiType,
  FiFileMinus,
  FiMapPin,
  FiFacebook,
  FiYoutube,
  FiSend,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import axios from "axios";

// async function getSingleCourse() {}
//  const response = await axios.post("https://hobby-zone.kirellos.com/api/V1/showCourseLevels",{
//   "course_id":5
// })

// if (response.status == 200) {
//    data = response.data.data[0];
//   console.log(data);
//   isLoading = flase ; 
//   return response.json();
// } // const Course = await getSingleCourse();
const CourseDetail =  ({ data }) => {

      
   
  

    

if (!data) {
  return <p>Loading...</p>;
}



  return (
   <div className="container-fluide">
    <h1>{data.name}</h1>
      <header></header>
      <div className="container-fluide">
        <div className="row">
          <div className="container-fluide mx-3 col-lg-7 ">
            <div className=" d-flex  justify-content-around">
              <div>
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="OverView"
                  color="white"
                  handleClick={() => {
                    console.log("Abdelrahman");
                  }}
                />
              </div>{" "}
              <div>
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="OverView"
                  color="white"
                  handleClick={() => {
                    console.log("Abdelrahman");
                  }}
                />
              </div>{" "}
              <div>
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="OverView"
                  color="white"
                  handleClick={() => {
                    console.log("Abdelrahman");
                  }}
                />
              </div>{" "}
              <div>
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="OverView"
                  color="white"
                  handleClick={() => {
                    console.log("Abdelrahman");
                  }}
                />
              </div>
            </div>

            <div className="main my-5 mx-3 rounded-5 p-3">
              <div className="d-flex justify-content-around">
                <div
                  className="p-2 m-2 rounded-3"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  {" "}
                  <h2>4 Out Of 5</h2>
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                  <h4>Top Raiting</h4>
                </div>

                <div
                  className="p-2 m-2 rounded-3"
                  style={{ backgroundColor: "whitesmoke" }}
                >
                  <label>
                    <b>5 Stars</b>{" "}
                  </label>{" "}
                  <meter
                    min={20}
                    max={100}
                    value={100}
                    style={{ width: "15em" }}
                  ></meter>{" "}
                  <br />
                  <label>
                    <b>4 Stars</b>{" "}
                  </label>{" "}
                  <meter
                    min={20}
                    max={100}
                    value={90}
                    style={{ width: "15em" }}
                  ></meter>
                  <br />
                  <label>
                    <b>3 Stars</b>{" "}
                  </label>{" "}
                  <meter
                    min={20}
                    max={100}
                    value={85}
                    style={{ width: "15em" }}
                  ></meter>
                  <br />
                  <label>
                    <b>2 Stars</b>{" "}
                  </label>{" "}
                  <meter
                    min={20}
                    max={100}
                    value={75}
                    style={{ width: "15em" }}
                  ></meter>
                  <br />
                  <label>
                    <b>1 Stars</b>{" "}
                  </label>{" "}
                  <meter
                    min={20}
                    max={100}
                    value={70}
                    style={{ width: "15em" }}
                  ></meter>
                </div>
              </div>

              <div className="d-flex gap-2 mt-3">
                <Image
                  className="rounded-5 "
                  src={img3}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div>
                  <h2>Lina</h2>
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum veniam, illum laudantium obcaecati atque sint. Animi
                vero fugit ea pariatur voluptatem recusandae temporibus eum
                dolore. Et ratione consectetur nemo commodi!
              </p>

              <div className="d-flex gap-2 mt-3">
                <Image
                  className="rounded-5"
                  src={img3}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div>
                  <h2>{data.id}</h2>
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum veniam, illum laudantium obcaecati atque sint. Animi
                vero fugit ea pariatur voluptatem recusandae temporibus eum
                dolore. Et ratione consectetur nemo commodi!
              </p>

              <div className="d-flex gap-2 mt-3">
                <Image
                  className="rounded-5 "
                  src={""}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
                <div>
                  <h2>Lina</h2>
                  <ReactStars count={5} size={24} color2={"#ffd700"} />
                </div>
              </div>

              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorum veniam, illum laudantium obcaecati atque sint. Animi
                vero fugit ea pariatur voluptatem recusandae temporibus eum
                dolore. Et ratione consectetur nemo commodi!
              </p>
            </div>
          </div>

          {/*  */}
          <div className=" col-lg-4 my-5 p-3 rounded-5 shadow-lg">
            <div>
              <Image
                className="p-3 d-flex rounded-5 shadow-lg  mx-auto"
                src={img1}
                width={320}
                height={300}
                alt="Picture of the author"
              />
            </div>

            <div className="d-flex align-items-center gap-5 justify-content-between my-2">
              <h3> 94.65$ </h3>
              <span className="strikethrough"> $100</span>
              <span className="transparent-bg">50%off</span>
            </div>
            <div className="col-md-6 col-lg-6"></div>
            <div className="row">
              <div className="col-md-12 col-lg-12 text-center">
                <p>
                  <b>{data.name}</b>{" "}
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <DeafultButton
                  bg=" rgb(77, 12, 138)"
                  text="Buy Now"
                  color="white"
                  handleClick={() => {
                    window.location.href = "CartPage";
                  }}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12">
                <hr />
                <h4>This Course Included </h4>
                <div className="d-flex align-items-center">
                  <FiDollarSign className="icon" />
                  <span>Money Back Guarantee</span>
                </div>
                <div className="d-flex align-items-center">
                  <FiCamera className="icon" />
                  <span>Access on all devices</span>
                </div>
                <div className="d-flex align-items-center">
                  <FiFileMinus className="icon" />
                  <span>certification of completion</span>
                </div>
                <div className="d-flex align-items-center">
                  <FiTrendingUp className="icon" />
                  <span>32 moduls</span>
                </div>
                <hr />
                <h3>Training 5 or more people</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  ullam amet excepturi, iusto iste accusamus praesentium
                  expedita cum animi ratione aspernatur deserunt. Numquam.
                </p>
                <hr />
                <h3>Shear this course</h3>
                <div className="d-flex align-items-center justify-content-around my-3">
                  <FiFacebook className="icon" />
                  <FiYoutube className="icon" />
                  <FiSend className="icon" />
                  <FiInstagram className="icon" />
                  <FiTwitter className="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="container-fluide">
        <div className="row  shadow-lg my-5">
          <div className="col-lg-3 col-md-6 ">
            <Card1
              imageSrc="https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              designText="Design"
              durationText="3 months"
              lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur consequatur 
        nam modi nostrum praesentium consequuntur
        voluptate ullam, itaque quidem soluta esse quibusdam id impedit veritatis placeat rerum qui iste! "
              GirlImage="https://spes.vt.edu/content/spes_vt_edu/en/faculty-staff/faculty/salamanca-lina/jcr:content/bio-image.transform/l-medium/image.jpg"
              name="Lina"
              leftPrice="100$"
              rightPrice="80$"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card1
              imageSrc="https://images.pexels.com/photos/4064816/pexels-photo-4064816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              designText="Design"
              durationText="3 months"
              lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur consequatur 
        nam modi nostrum praesentium consequuntur
        voluptate ullam, itaque quidem soluta esse quibusdam id impedit veritatis placeat rerum qui iste! "
              GirlImage="https://spes.vt.edu/content/spes_vt_edu/en/faculty-staff/faculty/salamanca-lina/jcr:content/bio-image.transform/l-medium/image.jpg"
              name="Lina"
              leftPrice="100$"
              rightPrice="80$"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card1
              imageSrc="https://images.pexels.com/photos/3584996/pexels-photo-3584996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              designText="Design"
              durationText="3 months"
              lorem="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur consequatur 
             nam modi nostrum praesentium consequuntur
            voluptate ullam, itaque quidem soluta esse quibusdam id impedit veritatis placeat rerum qui iste! "
              GirlImage="https://spes.vt.edu/content/spes_vt_edu/en/faculty-staff/faculty/salamanca-lina/jcr:content/bio-image.transform/l-medium/image.jpg"
              name="Lina"
              leftPrice="100$"
              rightPrice="80$"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <Card1
              imageSrc="https://images.pexels.com/photos/3770612/pexels-photo-3770612.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              designText="Design"
              durationText="3 months"
              lorem="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet aspernatur consequatur 
         nam modi nostrum praesentium consequuntur
         voluptate ullam, itaque quidem soluta esse quibusdam id impedit veritatis placeat rerum qui iste! "
              GirlImage="https://spes.vt.edu/content/spes_vt_edu/en/faculty-staff/faculty/salamanca-lina/jcr:content/bio-image.transform/l-medium/image.jpg"
              name="Lina"
              leftPrice="100$"
              rightPrice="80$"
            />
          </div>
        </div>
      </div>

      {/*  */}
      <div className="container-fluide ">
        <div className="row section mx-5 justify-content-between">
          <div className=" col-lg-6 mt-5   bg-light rounded-5 shadow-lg">
            <h1>
              Everything You Can Do In A physical Class Room , you can do with
              TOTC{" "}
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              nobis dicta, ea quisquam accusamus error nesciunt minima dolore
              pariatur repellat provident beatae rem eligendi maxime sit cumque
              modi. Voluptate, atque! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Harum nobis dicta, ea quisquam accusamus error
              nesciunt minima dolore pariatur repellat provident beatae rem
              eligendi maxime sit cumque modi. Voluptate, atque! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Harum nobis dicta, ea
              quisquam accusamus error nesciunt minima dolore pariatur repellat
              provident beatae rem eligendi maxime sit cumque modi. Voluptate,
              atque!
            </p>
          </div>

          <div className="sup col-lg-5  mx-2 my-5">
            <img
              className="img2 p-2"
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
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

export async function getServerSideProps(context) {
  const { params } = context;
  const courseId = params.id; // Assuming your route is defined as /course/[id]

  try {
    const response = await axios.post("https://hobby-zone.kirellos.com/api/V1/showCourseLevels", {
      "course_id": 2
    });

    if (response.status === 200) {
      const data = response.data.data[0];
      return {
        props: {
          data,
        },
      };
    }
  } catch (error) {
    console.error("Error fetching course:", error);
    return {
      props: {
        data: null,
      },
    };
  }
}

export default CourseDetail;
