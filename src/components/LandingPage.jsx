import React from "react";
import headphone from "../images/headphone.png";
import earphone from "../images/earphone.png";
import watch from "../images/watch.png";
import macbook from "../images/macbook.png";
import gaming from "../images/gaming.png";
import vr from "../images/vr.png";
import speaker from "../images/speaker.png";
const LandingPage = () => {
  return (
    <div className="container ">
      <div
        className="headImg p-3 h-[450px] flex flex-col-reverse sm:flex-row  grid-cols-2 sm:justify-between items-center
       rounded-md bg-gradient-to-r from-gray-300/80 to-gray-100 
         dark:from-gray-900 dark:to-gray-800 dark:text-white
        "
      >
        <div className="text-center sm:text-left  ">
          <h1
            data-aos="zoom-out"
            data-aos-duration="500"
            data-aos-once="true"
            className="font-bold text-3xl lg:text-4xl"
          >
            Wireless
          </h1>
          <h1 
          data-aos="zoom-out"
          data-aos-duration="500"
          data-aos-once="true"
          className="uppercase font-bold  text-4xl lg:text-6xl">
            headphones
          </h1>
          <button
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-duration= "500"
          data-aos-delay= "300"

           className="uppercase rounded-full bg-primary text-white py-1 px-4 mt-4 font-semibold ">
            buy know
          </button>
        </div>
        <div
           data-aos="zoom-in"
           data-aos-once="true"
         className="image sm:ms-auto">
          <img src={headphone} alt="headPhone" className=" w-[300px]" />
        </div>
      </div>
      <div className=" products mt-3 grid :grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {/* first col */}
        <div
          className=" group p-2 relative rounded-md h-[320px]   bg-gradient-to-br from-black/90 to-black/70
      flex items-end overflow-hidden"
        >
          <div className="text">
            <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-semibold text-4xl opacity-40">Earphone</p>
            <button
              className="uppercase rounded-full  bg-primary
           text-white py-1 px-4 my-2 font-bold"
            >
              browse
            </button>
          </div>
          <div className="image ">
            <img
              src={earphone}
              alt="earphone"
              className="w-[250px] sm:w-auto sm:absolute sm:bottom-0 sm:right-0 
            group-hover:scale-105 duration-500"
            />
          </div>
        </div>
        {/* sec col */}

        <div
          className=" group p-2 relative rounded-md h-[320px]   bg-gradient-to-br from-brandYellow to-brandYellow/70
      flex items-end overflow-hidden"
        >
          <div className="text">
            <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-bold text-3xl opacity-40">Watch</p>
            <button
              className="uppercase rounded-full  text-brandYellow bg-white
            py-1 px-4 my-2 font-bold"
            >
              browse
            </button>
          </div>
          <div className="image ">
            <img
              src={watch}
              alt="earphone"
              className="  sm:absolute sm:bottom-10 sm:right-[-40px] 
            group-hover:scale-105 duration-500 "
            />
          </div>
        </div>
        {/* third col */}
        <div
          className=" group p-2 relative rounded-md h-[320px] sm:col-span-2  bg-gradient-to-br from-primary to-primary/70
      flex items-end"
        >
          <div className="text">
            <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-bold text-3xl opacity-40">Laptop</p>
            <button
              className="uppercase rounded-full  text-primary bg-white
            py-1 px-4 my-2 font-bold"
            >
              Browse
            </button>
          </div>
          <div className="image ">
            <img
              src={macbook}
              alt="earphone"
              className=" w-[300px]  ms-auto absolute bottom-0 right-0 
            group-hover:scale-105 duration-500 "
            />
          </div>
        </div>
        {/* four col */}
        <div
          className=" p-2 relative rounded-md h-[320px] sm:col-span-2
        bg-gradient-to-br from-gray-400/90 to-gray-100
      flex items-end group :"
        >
          <div className="text z-50">
            <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-bold text-3xl opacity-40">PlayStation</p>
            <button
              className="uppercase rounded-full bg-primary text-white
            py-1 px-4 my-2 font-bold"
            >
              Browse
            </button>
          </div>
          <div className="image ">
            <img
              src={gaming}
              alt="earphone"
              className=" w-[230px] sm:w-auto ms-auto absolute bottom-0 right-0 
            group-hover:scale-105  duration-500 "
            />
          </div>
        </div>
        {/* five col */}
        <div
          className=" group p-2 relative rounded-md h-[320px] 
        bg-gradient-to-br from-brandGreen/90 to-brandGreen/90
      flex items-end"
        >
          <div className="text z-10">
            <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-bold text-3xl  opacity-40">Vr</p>
            <button
              className="uppercase rounded-full  bg-primary text-white
            py-1 px-4 my-2 font-bold"
            >
              Browse
            </button>
          </div>
          <div className="image ">
            <img
              src={vr}
              alt="earphone"
              className=" ms-auto absolute bottom-0 right-0
            group-hover:scale-105 duration-500 "
            />
          </div>
        </div>
        {/* sex col */}
        <div
          className=" group p-2 relative rounded-md h-[320px] 
        bg-gradient-to-br from-brandBlue/90 to-brandBlue
      flex items-end"
        >
          <div className="text z-10">
            <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
            <p className="font-semibold text-3xl text-white">with</p>
            <p className="font-bold text-3xl  opacity-40">speaker</p>
            <button
              className="uppercase rounded-full  bg-primary text-white
            py-1 px-4 my-2 font-bold"
            >
              Browse
            </button>
          </div>
          <div className="image  ">
            <img
              src={speaker}
              alt="earphone"
              className=" ms-auto absolute bottom-0 right-0
            group-hover:scale-105 duration-500 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
