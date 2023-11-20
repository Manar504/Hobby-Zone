import "./Input.css"
import React from 'react'

type defaultProps = {
    type? : string ;
    label? : string ;
    name? : string ;
    id? : string ; 
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

}

const DeafultInput = (props:defaultProps) => {
  return (
    <div className="Wrapper">
        <div className="input-data">
           <input type={props.type}  name={props.name} id={props.id} onChange={props.onChange}/>   
           <div className="underline"></div>
           <label htmlFor= {props.label}> {props.label} </label> 
        </div>
    </div>
  )
}

export default DeafultInput