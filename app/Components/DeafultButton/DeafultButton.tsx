'use client';
import "./DeafultButton.css"

import React, { FormEventHandler } from 'react'

type ButtonProps= {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>)=> void ;
    text : string ; 
    width? : string ;
    bg? : string ;
    color?: string;
}


const DeafultButton = (props:ButtonProps) => {
  const defaultBgColor = 'white';
  return (
    <button className="deafult-button btn btn-lg my-3 rounded rounded-pill" 
        style={{
            width:`${props.width}`,
            backgroundColor: props.bg || defaultBgColor,
            color:  props.color || "black" ,

        }}
    onClick={props.handleClick} > {props.text}  </button>
  )
}

export default DeafultButton