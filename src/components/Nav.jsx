import React, { createContext, useContext, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";
import Carts from "./Carts";

export const showCarts = createContext();
const Nav = () => {
  const [isShow, setIsShow] = useState(false);
  const handleCarts = () => {
    setIsShow(!isShow);
    console.log("hello")
    console.log(isShow)
  };
  return (
    <>
      <showCarts.Provider value={{isShow,setIsShow}}>
        <Carts />
      </showCarts.Provider>
      <div className="container ">
        <div className="flex items-center justify-between  dark:bg-gray-800 ">
          <div className="left-nav flex items-center gap-4 ">
            <div>
              <a
                href="#"
                className="text-primary font-semibold text-2xl sm:text-3xl"
              >
                SHOP
              </a>
            </div>
            {/*   ul  */}
            <ul className="flex items-center gap-4">
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                <a href="Home">Home</a>
              </li>
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                <a href="Shop">Shop</a>
              </li>
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                <a href="about">about</a>
              </li>
              <li className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                <a href="Blogs">Blogs</a>
              </li>
            </ul>
          </div>
          <div className="right-nav flex items-center">
            {/*search bar */}
            <div className="group relative ">
              <input type="text" placeholder="search" className="search-bar" />
              <FaSearch
                className="text-xl text-gray-600 dark:text-gray-400 absolute 
          right-3 top-1/2 -translate-y-1/2 group-hover:text-primary duration-200"
              />
            </div>
            {/* order button sec */}
            <button className="cartShopping relative p-3 ">
              <FaCartShopping
                onClick={handleCarts}
                className="text-xl text-gray-600 dark:text-gray-400"
              />
              <div
                className="w-4 h-4 bg-red-500 text-white rounded-full 
        absolute top-0 right-0 flex items-center justify-center"
              >
                4
              </div>
            </button>
            {/*dark bar */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
