import React from "react";
import icon from '../res/icon.png'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="z-40">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 dark:bg-gray-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={icon} className="h-6 mr-3 sm:h-16" alt="Flowbite Logo" />
          </Link>
          <div className="flex">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto"
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <Link
                    to="/"
                    className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  > 
                    Explore
                  </Link>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex p-2">
              <Link
                to="/generate"
                className="text-white border-[3px] focus:ring-1 font-medium rounded text-sm px-5 py-2 text-center mr-3"
              >
                Studio
              </Link>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Sign In
              </button>
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
