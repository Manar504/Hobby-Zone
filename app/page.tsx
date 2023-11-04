import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Home/Hero/page";
import Section1 from "./Home/Section1/page";
import Home from "./Home/page";
import Script from "next/script";

export default function Main() {
  return (
    <main>
      <Home />
      <script
        defer
        src="https://webkeyz.github.io/stand-with-palestine/dist/stand-with-palestine-widget.js"
      ></script>
    </main>
  );
}
