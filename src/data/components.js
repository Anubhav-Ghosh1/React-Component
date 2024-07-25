import CheckBox from "../components/Component Section/CheckBox";
import FileInput from "../components/Component Section/FileInput";
import Rating from "../components/Component Section/Rating";
import Search from "../components/Component Section/Search";
import Slider from "../components/Component Section/Slider";
import Spinner from "../components/Component Section/Spinner";
import Switch from "../components/Component Section/Switch";
import TimePicker from "../components/Component Section/TimePicker";
import Toast from "../components/Component Section/Toast";
import Button2 from "../components/ComponentLibrary/Button";

let data = [
  {
    id: 1,
    title: "Button",
    code: `import React from 'react';
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

    export default Button2;`,
    codeComponent: <Button2 buttonName={"Button"} />,
  },
  {
    id: 2,
    title: "Switch",
    code: `{import React, { useState } from 'react';

const SwitchWidget = () => {
  const [isSwitched, setIsSwitched] = useState(false);

  const toggleSwitch = () => setIsSwitched(!isSwitched);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        onClick={toggleSwitch}
        className={relative inline-flex items-center cursor-pointer bg-red-500 p-1 rounded-full}
      >
        <div
          className={translate-x-5 bg-white w-6 h-6 rounded-full transition-transform duration-200 ease-in-out}
        ></div>
      </div>
    </div>
  );
};

export default SwitchWidget;`,
    codeComponent: <Switch />,
  },
  {
    id: 3,
    title: "Slider",
    code: `import React, { useState } from 'react';

const SliderWidget = () => {
  const [currentSliderValue, setCurrentSliderValue] = useState(20);

  const handleChange = (event) => {
    setCurrentSliderValue(event.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-500 font-medium">
          {currentSliderValue}
        </div>
      </div>
    </div>
  );
};

export default SliderWidget;
`,
    codeComponent: <Slider />,
  },
  {
    id: 4,
    title: "Search",
    code: `import React from 'react';

const Search = ({ hintText }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={hintText}
        className="w-full py-2 px-10 flex border border-white rounded-md shadow-lg bg-white text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-0"
      />
      <div className="absolute top-0 left-0 flex items-center pl-3 h-full pointer-events-none">
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M15.5 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;`,
    codeComponent: <Search />,
  },
  {
    id: 5,
    title: "Spinner",
    code: `import React from 'react';

const Search = ({ hintText }) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder={hintText}
        className="w-full py-2 px-10 flex border border-white rounded-md shadow-lg bg-white text-gray-800 placeholder-gray-400 focus:border-red-500 focus:ring-0"
      />
      <div className="absolute top-0 left-0 flex items-center pl-3 h-full pointer-events-none">
        <svg
          className="w-5 h-5 text-red-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M15.5 10.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;`,
    codeComponent: <Spinner />,
  },
  {
    id: 6,
    title: "Rating",
    code: `import React from "react";

function Rating(props) {
  return (
    <div class="flex items-center">
      <svg
        class="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        class="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        class="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        class="w-4 h-4 text-yellow-300 ms-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
      <svg
        class="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20">
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    </div>
  );
}

export default Rating;`,
    codeComponent: <Rating />,
  },
  {
    id: 7,
    title: "Toast",
    code: `import React from "react";

function Toast(props) {
  return (
    <div
      id="toast-default"
      class="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert">
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
        <svg
          class="w-4 h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 20">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
          />
        </svg>
        <span class="sr-only">Fire icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Set yourself free.</div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-default"
        aria-label="Close">
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default Toast;`,
    codeComponent: <Toast />,
  },
  {
    id: 8,
    title: "Time Picker",
    code: `import React from "react";

function TimePicker(props) {
  return (
    <div>
      <form class="max-w-[8rem] mx-auto">
        <label
          for="time"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select time:
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24">
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <input
            type="time"
            id="time"
            class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            min="09:00"
            max="18:00"
            value="00:00"
            required
          />
        </div>
      </form>
    </div>
  );
}

export default TimePicker;`,
    codeComponent: <TimePicker />,
  },
  {
    id: 9,
    title: "Check Box",
    code: `import React from "react";

function CheckBox(props) {
  return (
    <div>
      <div class="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Default checkbox
        </label>
      </div>
      <div class="flex items-center">
        <input
          checked
          id="checked-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="checked-checkbox"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Checked state
        </label>
      </div>
    </div>
  );
}

export default CheckBox;`,
    codeComponent: <CheckBox />,
  },
  {
    id: 9,
    title: "File Picker",
    code: `import React from "react";

function FileInput(props) {
  return (
    <div>
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="file_input">
        Upload file
      </label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        id="file_input"
        type="file"
      />
    </div>
  );
}

export default FileInput;`,
    codeComponent: <FileInput />,
  },
];

export default data;
