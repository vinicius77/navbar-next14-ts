import React from "react";

const HeaderRightNavigation = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="sm:flex sm:gap-4">
        <a
          className="block rounded-md bg-primary_violet px-5 py-2.5 text-sm font-medium text-white transition hover:bg-secondary_violet"
          href="/"
        >
          Login
        </a>

        <a
          className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-primary_violet transition hover:text-primary_violet/75 sm:block"
          href="/"
        >
          Register
        </a>
      </div>

      <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
        <span className="sr-only">Toggle menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  );
};

export default HeaderRightNavigation;
