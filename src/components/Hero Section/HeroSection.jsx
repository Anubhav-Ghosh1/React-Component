import React from "react";
import { TypeAnimation } from "react-type-animation";
import Card from "../Card/Cards";
import Button2 from "../ComponentLibrary/Button";

function HeroSection({isDarkmode,setIsDarkMode}) {
  return (
    <div className="flex flex-col justify-center lg:mt-24 items-center w-full">
      <span className={`lg:text-[2.6em] text-center lg:text-start text-[1.5rem] ${isDarkmode ? "text-white":"text-black"} font-semibold`}>
        React Components That Every{" "}
        <span
          className={`${isDarkmode? "gradient-text": "gradient-text-1"}`}
          style={{ display: "inline-block", width: "10em" }}>
          <TypeAnimation
            sequence={[
              " Developer Needs",
              2000,
              " Designer Needs",
              3000,
              " Freelancer Needs",
              3000,
              " Everyone Needs",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </span>
      </span>
      <span className={`text-center lg:text-start ${isDarkmode ? "text-white" : "text-black"} opacity-80 mt-5 text-lg`}>
        "Building Your Dreams, One Component at a Time"
      </span>
    </div>
  );
}
export default HeroSection;
