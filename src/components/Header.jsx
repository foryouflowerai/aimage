import React, { useEffect, useState } from "react";
import icon from "../res/icon.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const user = JSON?.parse(localStorage?.getItem("aimageuser"));
    user && setUser(user);
  }, []);
  console.log(user);
  return (
    <div className="z-40">
      <nav className="bg-whit border-gray-200 px-2 sm:px-4 bg-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <NavLink to="/" className="flex items-center">
            <img
              src={icon}
              className="h-[3.5rem] mr-3 sm:h-16"
              alt="Flowbite Logo"
            />
          </NavLink>
          <div className="flex">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto"
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-pink-500"
                      } block py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                    }
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/explore"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-pink-500"
                      } block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                    }
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/Services"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-pink-500"
                      } block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    href="/Contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-white" : "text-pink-500"
                      } block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="flex p-2">
              <NavLink
                to="/generate"
                className="text-white text-md border-[1px] md:border-[3px] focus:ring-1 font-medium rounded px-5 py-1.5 md:py-2 text-center mr-3"
              >
                Studio
              </NavLink>
              {/* {!user && <NavLink
                to="/login"
                className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-1 font-medium rounded text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                Sign In
              </NavLink>} */}
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
