"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Home/Hero/page";
import Section1 from "./Home/Section1/page";
import Home from "./Home/page";
import Script from "next/script";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCourses } from "./GlobalRedux/allcoursesSlice";
import { SessionProvider } from "next-auth/react";
// import { Providers } from "./GlobalRedux/provider";

export default function Main() {

  
  return (
    
           <main>
      <Home />
      </main>
   

  );
}
