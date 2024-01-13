import React from "react";

const HeaderCentralNavigation = () => {
  return (
    <nav aria-label="Global" className="hidden md:block">
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/"
          >
            Home
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/"
          >
            Explore
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/"
          >
            About Us
          </a>
        </li>

        <li>
          <a
            className="text-gray-500 transition hover:text-gray-500/75"
            href="/"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderCentralNavigation;
