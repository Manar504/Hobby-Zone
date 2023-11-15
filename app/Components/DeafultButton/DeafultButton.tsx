'use client'
import { useRouter } from "next/navigation";
import "./DeafultButton.css";

import React, { FormEventHandler } from "react";

type ButtonProps = {
  handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  width?: string;
  bg?: string;
  color?: string;
  type?: "button" | "submit" | "reset";
  navigate? : string;
};

const DeafultButton = (props: ButtonProps) => {
  let router =  useRouter();
  const defaultBgColor = "white";
  return (
    <button
      type={props.type || "button"}
      className="deafult-button btn btn-m my-3 rounded rounded-pill col-12"
      style={{
        width: `${props.width}`,
        backgroundColor: props.bg || defaultBgColor,
        color: props.color || "black",
      }}

       onClick={()=> props.navigate != null ?  router.push(props.navigate!) : props.handleClick }
      
      
    >
      {" "}
      {props.text}{" "}
    </button>
  );
};

export default DeafultButton;
