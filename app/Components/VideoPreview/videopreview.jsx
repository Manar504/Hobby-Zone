"use client"
import React from 'react';
import { CldVideoPlayer } from 'next-cloudinary';
const VideoPlayer = () => {
  return (
   <CldVideoPlayer 
   
   width="1620"
   height="1080"
   src="samples/sea-turtle"
   colors={{
     accent: '#ff0000',
     base: '#00ff00',
     text: '#0000ff'
   }}/>
  );
};

export default VideoPlayer;