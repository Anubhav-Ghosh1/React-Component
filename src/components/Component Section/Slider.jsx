import React, { useState } from 'react';

const Slider = () => {
  const [currentSliderValue, setCurrentSliderValue] = useState(20);

  const handleChange = (event) => {
    setCurrentSliderValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="relative w-64">
        <input
          type="range"
          min="0"
          max="100"
          step="20"
          value={currentSliderValue}
          onChange={handleChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
          style={{
            accentColor: 'red', // For changing the slider color
          }}
        />
        <div className="absolute top-1/2 left-0 transform -translate-y-10 text-red-500 font-medium">
          {currentSliderValue}
        </div>
      </div>
    </div>
  );
};

export default Slider;
