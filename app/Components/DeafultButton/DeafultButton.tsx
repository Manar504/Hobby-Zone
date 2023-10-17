'use client';
import "./DeafultButton.css"

import React, { FormEventHandler } from 'react'

type ButtonProps= {
    handleClick : (event : React.MouseEvent<HTMLButtonElement>)=> void ;
    text : string ; 
    width : string ;
    bg? : string ;
}


const DeafultButton = (props:ButtonProps) => {
  return (
    <button className="deafult-button btn btn-lg my-3 rounded rounded-pill" 
        style={{
            width:`${props.width}`,
            backgroundColor:`${props.bg}`

        }}
    onClick={props.handleClick} > {props.text} </button>
  )
}

export default DeafultButton