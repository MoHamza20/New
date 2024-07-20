import React from "react";
import Nav from "./components/Nav";
import LandingPage from "./components/LandingPage";
import Services from "./components/Services";
import Banner from "./components/Banner";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Carts from "./components/Carts"
import Provider from "./components/provider";
const App = () => {
  return (
    <div className= " relative bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Provider>
      <Nav />
      <LandingPage/>
      <Services/>
      <Banner/>
      <Blogs/>
      <Footer/>
      <Carts/>
      </Provider>
    </div>
  );
};

export default App;
