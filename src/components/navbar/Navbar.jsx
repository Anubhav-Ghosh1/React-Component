import React, { useState } from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

function Navbar({isDarkmode,setIsDarkMode}) {
    return (
        <div className='w-full mt-2 lg:mt-10 px-10 flex justify-between'>
            <div className={`text-xl ${isDarkmode ? "text-white" : "text-black"}`}>
                <span className='font-semibold'>
                    Component
                </span>
                {
                    " "
                }
                <span className='font-bold'>HUB</span>
            </div>
            <div className='text-xl text-white'>
                {
                    isDarkmode ? <MdLightMode onClick={()=>{
                        setIsDarkMode(!isDarkmode);
                    }}/> :<MdDarkMode className='text-black' onClick={()=>{
                        setIsDarkMode(!isDarkmode);
                    }}/>
                }
            </div>
        </div>
    );
}

export default Navbar;