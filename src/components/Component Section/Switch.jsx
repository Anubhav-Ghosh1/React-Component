import React, { useState } from 'react';

const Switch = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const toggleSwitch = () => setIsSwitched(!isSwitched);

  return (
    <div className="flex justify-center items-center">
      <div
        onClick={toggleSwitch}
        className={`relative inline-flex w-14 items-center cursor-pointer ${
          isSwitched ? 'bg-red-500' : 'bg-gray-500'
        } p-1 rounded-full`}
      >
        <div
          className={`${
            isSwitched ? 'translate-x-6 bg-white' : 'translate-x-0 bg-white'
          } w-6 h-6 rounded-full transition-transform duration-200 ease-in-out`}
        ></div>
      </div>
    </div>
  );
};

export default Switch;