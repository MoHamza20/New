import React, { useContext } from "react";
import { showCarts } from "./Nav";
import { IoCloseOutline } from "react-icons/io5";


const Carts = () => {
  const {isShow} = useContext(showCarts);
  // const { setIsShow } = useContext(showCarts);
  return (
    isShow && (
      <div className=" w-screen h-screen fixed z-50 top-0 left-0 bg-black/50">
        <div
          className="fixed w-[300px] top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2
  bg-white dark:bg-gray-900 dark:text-white duration-200"
        >
          {/* header */}
          <div className="flex justify-between items-center p-2">
            <h1 className="text-xl font-semibold">order now</h1>
            <div>
              <IoCloseOutline
               
                className="text-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Carts;
