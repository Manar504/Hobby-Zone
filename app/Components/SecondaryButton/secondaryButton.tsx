"use client"
import"./secondaryButton.css"
import React from 'react'
type ButtonProps = {
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
    width?: string;
    bg?: string;
    color?: string;
    type?: "button" | "submit" | "reset";
    navigate? : string;
  };
  
const SecondaryButton = (props:ButtonProps) => {
  return (
    <div className="follow-btn" > {props.text} </div>
  )
}

export default SecondaryButton