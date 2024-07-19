import React from "react";
import headphone from "../images/headphone.png";
import earphone from "../images/earphone.png";
import watch from "../images/watch.png";
import macbook from "../images/macbook.png";
import gaming from "../images/gaming.png";
import vr from "../images/vr.png";
import speaker from "../images/speaker.png"
const LandingPage = () => {
  return (
    <div
      className="container "
    >
      <div className="headImg px-2 h-[450px] grid justify-center sm:grid-cols-2 sm:justify-start items-center
       rounded-md bg-gradient-to-r from-gray-300/80 to-gray-100 
         dark:from-gray-900 dark:to-gray-800 dark:text-white
        ">
        <div className="text   ">
          <h1 className="font-bold text-3xl lg:text-4xl">Wireless</h1>
          <h1 className="uppercase font-bold  text-4xl lg:text-6xl">headphones</h1>
          <button className="uppercase rounded-full bg-primary text-white py-1 px-4 font-semibold mt-2">buy know</button>
          </div>
        <div className="image ms-auto">
          <img src={headphone} alt="" className="max-h-[300px]" />
        </div>
      </div> 
      <div className="products mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* first col */}
      <div className="group p-2 relative rounded-md h-[320px]  bg-gradient-to-br from-black/90 to-black/70
      flex items-end"
      >
          <div className="text">
          <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-semibold text-4xl opacity-40">Earphone</p>
          <button className="uppercase rounded-full  bg-primary
           text-white py-1 px-4 my-2 font-bold">browse</button>
          </div>
          <div className="image w-[400px]">
            <img src={earphone}  alt="earphone" className="w-[320px] absolute bottom-0 right-0 
            group-hover:scale-105 duration-500" />
          </div>
      </div>
      {/* sec col */}

      <div className="group p-2 relative rounded-md h-[320px]  bg-gradient-to-br from-brandYellow to-brandYellow/70
      flex items-end"
      >
          <div className="text">
          <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-bold text-3xl opacity-40">Watch</p>
          <button className="uppercase rounded-full  text-brandYellow bg-white
            py-1 px-4 my-2 font-semibold">browse</button>
          </div>
          <div className="image w-[400px]">
            <img src={watch}  alt="earphone" className="w-[320px] ms-auto absolute bottom-10 right-[-40px] 
            group-hover:scale-105 duration-500 " />
          </div>
      </div>
      {/* third col */}
      <div className="group p-2 relative rounded-md h-[320px] col-span-2  bg-gradient-to-br from-primary to-primary/70
      flex items-end"
      >
          <div className="text">
          <p className="mb-[2px] text-xl text-gray-400">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-bold text-3xl opacity-40">Laptop</p>
          <button className="uppercase rounded-full  text-primary bg-white
            py-1 px-4 my-2 font-semibold">Browse</button>
          </div>
          <div className="image w-[400px]">
            <img src={macbook}  alt="earphone" className="w-[300px] ms-auto absolute bottom-0 right-0 
            group-hover:scale-105 duration-500 " />
          </div>
      </div>
      {/* four col */}
      <div className=" p-2 relative rounded-md h-[320px] col-span-2
        bg-gradient-to-br from-gray-400/90 to-gray-100
      flex items-end group :"
      >
          <div className="text">
          <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-bold text-3xl opacity-40">PlayStation</p>
          <button className="uppercase rounded-full bg-primary text-white
            py-1 px-4 my-2 font-semibold">Browse</button>
          </div>
          <div className="image w-[400px]">
            <img src={gaming}  alt="earphone" className="w-[300px] ms-auto absolute bottom-0 right-0 
            group-hover:scale-105  duration-500 " />
          </div>
      </div>
      {/* five col */}
      <div className="group p-2 relative rounded-md h-[320px] 
        bg-gradient-to-br from-brandGreen/90 to-brandGreen/90
      flex items-end"
      >
          <div className="text z-10">
          <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-bold text-3xl text-white">Vr</p>
          <button className="uppercase rounded-full  bg-primary text-white
            py-1 px-4 my-2 font-semibold">Browse</button>
          </div>
          <div className="image w-[400px] " >
            <img src={vr}  alt="earphone" className="w-[300px] ms-auto absolute bottom-0 right-0
            group-hover:scale-105 duration-500 " />
          </div>
      </div>
      {/* sex col */}
      <div className="group p-2 relative rounded-md h-[320px] 
        bg-gradient-to-br from-brandBlue/90 to-brandBlue
      flex items-end"
      >
          <div className="text z-10">
          <p className="mb-[2px] text-xl text-gray-100">Enjoy</p>
          <p className="font-semibold text-3xl text-white">with</p>
          <p className="font-bold text-3xl text-white">speaker</p>
          <button className="uppercase rounded-full  bg-primary text-white
            py-1 px-4 my-2 font-semibold">Browse</button>
          </div>
          <div className="image w-[400px] " >
            <img src={speaker}  alt="earphone" className="w-[300px] ms-auto absolute bottom-0 right-0
            group-hover:scale-105 duration-500 " />
          </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
