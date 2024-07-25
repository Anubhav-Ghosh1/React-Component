import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/Hero Section/HeroSection";
import ComponentSection from "./components/Component Section/ComponentSection";

function App() {
  const [isDarkmode, setIsDarkMode] = useState(true);
  return (
    <div className="h-screen overflow-x-hidden">
      <div className={`py-1 flex flex-col gap-10 ${
            isDarkmode ? "dot-grid-dark" : "dot-grid-light"
          } text-white`} >
        <div
        // className="flex flex-col h-screen items-center justify-center"
          >
          <Navbar isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
          <div className="lg:translate-y-0 translate-y-[2rem]">
            <HeroSection isDarkmode={isDarkmode} setIsDarkMode={setIsDarkMode} />
          </div>
          <div className="lg:translate-y-0 translate-y-[5rem] lg:mb-10 mb-40">
          <ComponentSection
            isDarkmode={isDarkmode}
            setIsDarkMode={setIsDarkMode}
          />
          <div className="flex justify-center mt-10">
            <a href="https://www.linkedin.com/in/anubhav-ghosh11/">Created By Linkedin/Anubhav-Ghosh11</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
