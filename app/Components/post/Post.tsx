import React from 'react';
import './Post.css'; // Import your CSS file

const Post = () => {
  return (
    
    <div className="post container">
        <div className='row'> 
      <div className="post-header">
        <img
          src="https://i.pinimg.com/564x/13/89/2b/13892b92b04f7399a75cf16bb12991b1.jpg"
          alt="User Profile"
          className="profile-picture"
        />
        <div className="user-details">
          <p className="user-name">John Doe</p>
          <p className="post-time">2 hours ago</p>
        </div>
        
      </div>
      <div className="post-content">
      <div className="post-image ">
        <img
          src="https://i.pinimg.com/564x/b7/e8/3f/b7e83f68d8d850a16249c347ffcbe5c1.jpg"
          alt="Post Image"
          className="post-picture"
        />
       
      </div>
        <p>
          This is a sample post content. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
      <div className="post-actions">
        <button className="like-button">Like</button>
        <button className="comment-button">Comment</button>
      </div>
      </div>
    </div>
  );
};

export default Post;