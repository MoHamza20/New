import React, { useEffect } from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
// import Carts from "./components/Carts"
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
  useEffect(()=>{
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100
    }
    )
    AOS.refresh();
  }, [])
  return (
    <div className= "px-4 relative bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Nav />
      <LandingPage/>
      <Services/> 
      <Banner/>
      <Blogs/>
      <Footer/>
      {/* <Carts/> */}
    </div>
  );
};

export default App;
