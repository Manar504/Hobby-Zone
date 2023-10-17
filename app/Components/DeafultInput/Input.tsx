import "./Input.css"
import React from 'react'

type defaultProps = {
    type : string ;
    label : string ;

}

const DeafultInput = (props:defaultProps) => {
  return (
    <div className="Wrapper">
        <div className="input-data">
           <input type={props.type} required />   
           <div className="underline"></div>
           <label htmlFor= {props.label}> {props.label} </label> 
        </div>
    </div>
  )
}

export default DeafultInput