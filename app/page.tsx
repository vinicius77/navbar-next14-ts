"use client";
import app from "../_data/app_mock.json";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bottomNav = app.screens?.[0]?.bottom_nav;
  const toolbar = app.screens?.[0]?.toolbar;
  const imageToolbar = toolbar?.image?.key;

  const styles = bottomNav?.style;
  const backgroundColor = styles?.primary_color;
  const color = styles?.secondary_color;

  console.log({ styles });

  return (
    <main className="bg-white sm:bg-black md:bg-green-700 lg:bg-yellow-400">
      {/* <div className="fixed bottom-0 md:top-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Home
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
              <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Wallet
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
              />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Settings
            </span>
          </button>
          <button
            type="button"
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
          >
            <svg
              className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              Profile
            </span>
          </button>
        </div>
      </div> */}

      {/* <nav className="flex justify-between items-center w-[92%] mx-auto fixed bottom-0 left-0 sm:top-0 sm:absolute">
        <div>
          <Image
            src="./next.svg"
            width={16}
            height={16}
            className="w-16 cursor-pointer"
            alt="logo"
          />
        </div>
        <div className="nav-links duration-500 flex flex-row items-center px-5 h-16">
          <ul className="flex flex-column items-center gap-[4vw]">
            <li>
              <a className="hover:text-gray-500" href="#">
                Products
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Solution
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Resource
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Developers
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="./next.svg"
            width={16}
            height={16}
            className="w-16 cursor-pointer"
            alt="logo"
          />
        </div>
      </nav> */}
      <nav
        className="flex justify-center items-center h-16 fixed bottom-0 left-0 right-0 bg-white sm:top-0 sm:justify-between sm:px-5"
        style={{ color, backgroundColor }}
      >
        {imageToolbar && (
          <div className="hidden sm:block">
            <Image
              className="cursor-pointer"
              src={`https://backend.choicely.com/images/${imageToolbar}/serve/`}
              alt="..."
              width={32}
              height={32}
            />
          </div>
        )}
        <div className="nav-links flex flex-row items-center px-5 sm:px-0 static min-h-fit">
          <ul className="flex flex-column items-center gap-[4vw]">
            {bottomNav?.nav_list &&
              bottomNav.nav_list.map((navItem) => (
                <li key={navItem.title}>
                  <a className="hover:text-gray-500" href={`${navItem.title}`}>
                    {navItem.title}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        {isMenuOpen ? (
          <div className="text-black fixed hidden bg-white min-h-[60vh] left[-10%] right-0 w-[80vw] sm:flex sm:items-center px-5 top-[9%]">
            <ul className="flex flex-col gap-8">
              <li>
                <a className="hover:text-gray-500" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Solution
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Resource
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Developers
                </a>
              </li>
              <li>
                <a className="hover:text-gray-500" href="#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        ) : null}

        <div
          className="hidden sm:flex sm:items-center sm:gap-6"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Image
            className="cursor-pointer"
            src={isMenuOpen ? "./next.svg" : "./vercel.svg"}
            alt="..."
            width={32}
            height={32}
          />
        </div>
      </nav>
    </main>
  );
}
