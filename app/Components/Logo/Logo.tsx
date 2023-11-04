import React from 'react'
import origami from "../../../public/Assets/origami/origami.png";
import Image from 'next/image';

const Logo = () => {
  return (
    <Image src={origami} alt="hg" width={40} height={40}></Image>
  )
}

export default Logo