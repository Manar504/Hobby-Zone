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
    <button className="follow-btn" onClick={props.handleClick} type={props.type}> {props.text}  </button>
  )
}

export default SecondaryButton