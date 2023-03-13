import React, { useEffect, useState } from "react";
import icon from "../res/logo2.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [user, setUser] = useState(null);
  const [opened, setOpened] = useState(false);
  const [api, setApi] = useState("");
  const [isApi, setIsApi] = useState(false);

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
            <img src={icon} className="h-[3rem] sm:h-12" alt="For You" />
            {/* <img
              src={icon2}
              className=" h-[1.5rem] mr-1 sm:h-8"
              alt="For You"
            /> */}
          </NavLink>
          <div className="flex">
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto"
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-base md:font-medium md:border-0">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-pink-500 " : "text-white"
                      } block py-2 pl-3 pr-2 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
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
                        isActive ? "text-pink-500 " : "text-white"
                      } block py-2 pl-3 pr-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                    }
                  >
                    Explore
                  </NavLink>
                </li>
                <li>
                  <div
                    onClick={() => {
                      setIsApi(true);
                    }}
                    className={` block py-2 cursor-pointer pl-3 pr-2 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `}
                  >
                    Api Key
                  </div>
                </li>
                {/* <li>
                  <NavLink
                    to="/services"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-pink-500 " : "text-white"
                      } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                    }
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `${
                        isActive ? "text-pink-500 " : "text-white"
                      } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                    }
                  >
                    Contact
                  </NavLink>
                </li> */}
              </ul>
            </div>
            <div className="flex p-2">
              <NavLink
                to="/generate"
                className="text-white text-md bg-pink-500 font-medium rounded px-5 py-1.5 md:py-2 text-center mr-3"
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
                onClick={() => {
                  setOpened(!opened);
                }}
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
              <div className={`${opened ? "block " : "hidden md:block"}`}>
                <div
                  className={`${
                    opened || isApi ? "block " : "md:hidden"
                  } absolute right-0 w-screen h-screen opacity-30 bg-blend-darken bg-black`}
                  onClick={() => {
                    setOpened(false);
                    setIsApi(false);
                  }}
                ></div>
                <div
                  className={` ${isApi && "hidden "}
                flex flex-col md:hidden absolute mt-12 right-0 w-[50%] md:w-60 px-2 py-8 h-screen opacity-100 bg-blend-darken bg-[#F7F6FB] overflow-y-auto `}
                >
                  <ul className="flex flex-col text-gray-900 text-3xl p-4 mt-4 ">
                    <li>
                      <NavLink
                        onClick={() => {
                          setOpened(!opened);
                        }}
                        to="/"
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-pink-500 " : "text-gray-500"
                          } block py-2 pl-3 pr-4  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                        }
                        aria-current="page"
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={() => {
                          setOpened(!opened);
                        }}
                        to="/explore"
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-pink-500 " : "text-gray-500"
                          } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                        }
                      >
                        Explore
                      </NavLink>
                    </li>
                    <li>
                      <div
                        onClick={() => {
                          setIsApi(true);
                        }}
                        to="/explore"
                        className={`${
                          isApi ? "text-pink-500 " : "text-gray-500"
                        } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `}
                      >
                        API Key
                      </div>
                    </li>
                    {/* <li>
                      <NavLink
                        to="/services"
                        className={({ isActive }) =>
                          `${
                            isActive ? "text-pink-500 " : "text-gray-500"
                          } block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-gray-300 md:p-0 `
                        }
                      >
                        Services
                      </NavLink>
                    </li> */}
                  </ul>
                </div>
                {isApi && (
                  <div className="flex mx-auto flex-col left-4 md:right-24 md:left-3/4 absolute mt-[50%] md:mt-[4%] w-[90%] md:w-96 px-2 py-4 rounded opacity-100 bg-blend-darken bg-[#F7F6FB]">
                    <div className="mb-4 relative mt-4">
                    <img
                      onClick={() => {
                        setIsApi(false);
                        setOpened(false);
                      }}
                      className="w-8 absolute -right-1 -mt-7 h-8 ml-4 cursor-pointer"
                      src="https://img.icons8.com/material-rounded/24/FF0000/multiply--v1.png"
                      alt=""
                    />
                      <label>
                        Entery your OpenAi Key{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <div className="flex mt-2 relative items-center cursor-pointer">
                        <textarea
                          onChange={(e) => {
                            setApi(e.target.value);
                          }}
                          name="openai"
                          value={api}
                          className="block shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Your Api Key"
                        />
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        document.cookie = `openstring=${api}`;
                        setIsApi(false);
                        setApi('')
                      }}
                      className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded"
                      type="submit"
                    >
                      Add Key
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
