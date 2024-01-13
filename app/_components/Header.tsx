import React from "react";
import HeaderCentralNavigation from "./HeaderCentralNavigation";
import HeaderLogo from "./HeaderLogo";
import HeaderRightNavigation from "./HeaderRightNavigation";

function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 shadow-md sm:px-6 lg:px-8">
        <HeaderLogo />

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <HeaderCentralNavigation />

          <HeaderRightNavigation />
        </div>
      </div>
    </header>
  );
}

export default Header;
