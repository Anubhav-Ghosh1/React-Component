import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { IoMdCopy } from "react-icons/io";
import { toast } from 'react-toastify';

function Card({isDarkmode, title, code, codeComponent }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className={`card ${isDarkmode ? "bg-[#000000a0]" : "bg-[#1a1a1a]"}  border border-gray-600 py-10 px-10 rounded-md drop-shadow-3xl flex flex-col w-[19rem] items-center justify-start`}>
      <div className="flex w-full justify-between">
        <p className="text-xl">{title}</p>
        <CopyToClipboard text={code} onCopy={() => {
          toast.success("Code copied to clipboard");
          setCopied(true);}}>
          <button className="text-lg">
            <IoMdCopy />
          </button>
        </CopyToClipboard>
      </div>
      <div className="mt-10">{codeComponent}</div>
    </div>
  );
}

export default Card;
