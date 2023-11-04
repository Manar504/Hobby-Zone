import Image from "next/image"
import ProfilePhoto from "../Components/ProfilePhoto/ProfilePhoto"
import "./profile.css"
import image from "../../public/Assets/message.webp"

import React from 'react'
import Post from "../Components/post/Post"

const Profile = () => {
    return (<>
        <div className="container-fluid ">
            <div className="row">
                <div className="col-12 cover ">
                    <ProfilePhoto />

                </div>
                <div className="col-12 text-center mt-5 personal-details">
                    <h2 className="mt-5 ">Bilal Muhammed</h2>
                    <h4 className="mt-4 text-secondary">Uzbekistan, Tashkent</h4>
                    <p className="mt-4">I’m web designer, I work in programs like figma, adobe photoshop, adobe illustrator</p>


                </div>

                <div className="account-details">
                    <div className=" text-center"> <h2>21</h2>
                    <p className="text-secondary">Shots</p></div>
                    <div className="divider mx-3"></div>
                    <div className="mx-4 text-center"> <h2>238</h2>
                     <p className="text-secondary">Followers</p></div>
                     <div className="divider mx-3"></div>
                    <div className=" text-center"> <h2>238</h2>
                    <p className="text-secondary">Following</p></div></div>
            </div>
            <div className="buttons">
            <div className="follow-btn"> Follow </div>
            <div className="message-btn"> <Image className="message-icon" src={image} alt="message" height={20} width={20}/>   Message</div>
            </div>
            
            <Post/>
        </div>

    </>
    )
}

export default Profile