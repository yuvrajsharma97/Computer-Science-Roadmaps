import React from "react";
import Link from "next/link";

const CustomLinkButton = ({ text, href }) => {
  return (
    <Link href={href}>
      <span className="btn btn-wide bg-[#F7B318] text-lg text-primary hover:bg-[#e6a514] border-none my-5 mt-[3rem]">
        {text}
      </span>
    </Link>
  );
};

export default CustomLinkButton;
