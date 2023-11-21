
import Link from 'next/link'
import React, { useState } from 'react'
import "./Register.css"
import Form from './form'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'


const Register =  async () => {
  const session =  await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <Form/>
  )
}

export default Register


