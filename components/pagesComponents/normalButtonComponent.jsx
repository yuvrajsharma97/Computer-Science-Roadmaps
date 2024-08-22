import React from "react";

const CustomNormalButton = ({ text }) => {
  return (
    <button>
      <span className="btn btn-wide bg-[#F7B318] text-lg text-primary hover:bg-[#e6a514] border-none my-[3rem]">
        {text}
      </span>
    </button>
  );
};

export default CustomNormalButton;
