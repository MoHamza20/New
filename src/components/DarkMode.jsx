import React, { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("darkMode")
      ? localStorage.getItem("darkMode")
      : "light"
  );
  const handleDark = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("darkMode", newTheme);
  };

  const element = document.documentElement;
  console.log(element)
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div>
      {theme === "dark" && (
        <button onClick={handleDark} className="px-3">
          <MdDarkMode className="text-2xl relative top-[2px] text-gray-600 dark:text-gray-400" />
        </button>
      )}
      {theme === "light" && (
        <button onClick={handleDark} className="px-3">
          <MdOutlineDarkMode className="text-2xl relative top-[2px] text-gray-600 dark:text-gray-400" />
        </button>
      )}
    </div>
  );
};

export default DarkMode;
