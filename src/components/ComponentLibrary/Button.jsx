import React from 'react';

const Button2 = ({ buttonName }) => {
  return (
    <div className="flex justify-center">
      <div className="h-10 w-48 border-2 border-red-500 bg-white flex items-center justify-center cursor-pointer">
        <span className="text-red-500 font-medium text-lg">
          {buttonName}
        </span>
      </div>
    </div>
  );
};

export default Button2;