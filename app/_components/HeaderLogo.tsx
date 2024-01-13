import React from "react";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <a className="block text-primary_violet" href="/">
      <span className="sr-only">Home</span>
      <Image width={30} height={30} src="./logo.svg" alt="brand" />
    </a>
  );
};

export default HeaderLogo;
