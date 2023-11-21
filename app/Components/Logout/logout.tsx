"use client"
import { signOut } from 'next-auth/react'
import React from 'react'
import DeafultButton from '../DeafultButton/DeafultButton'

const Logout = () => {
  return (
    <button className='btn btn-danger' onClick={()=>signOut()} > Logout  </button> 
  )
}

export default Logout