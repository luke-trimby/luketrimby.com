import React from "react";
import Image from 'next/image';
import Logo from './img/logo-simple.png';
// import { RightArrowSvg } from './svg/right-arrow';

import styles from './Header.module.css';

interface HeaderProps {
  navbarOpen: boolean;
  setNavbarOpen: (open: boolean) => void;
}

export default function Header({ navbarOpen, setNavbarOpen }: HeaderProps) {

  const menuLinkDefault = 'font-medium text-black hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out';
  // const menuLinkBlack = 'inline-flex items-center px-4 py-2 my-2 font-medium text-white transition duration-500 ease-in-out transform rounded-lg text-md md:mt-0 md:ml-4 bg-black';

  return (
    <div className="fixed top-0 w-full z-30 clearNav md:bg-opacity-90 transition duration-300 ease-in-out">
      <div className="flex flex-col max-w-6xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Image src={Logo} className={styles.logo} alt="Logo" />
          <a
            href="/"
            className="text-lg font-semibold rounded-lg tracking-widest focus:outline-none focus:shadow-outline"
          >
            <h1 className="text-4xl Avenir tracking-tighter text-gray-900 md:text-4x1 lg:text-3xl">
              Lukas Tech
            </h1>
          </a>
          <button
            className="text-white cursor-pointer leading-none px-3 py-1 md:hidden outline-none focus:outline-none "
            type="button"
            aria-label="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#191919"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
        <div
          className={
            "md:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <nav className="flex-col flex-grow ">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <a href="#IWriteCode" className={menuLinkDefault} >
                  About
                </a>
              </li> */}
              <li>
                <a href="#Faq" className={menuLinkDefault} >
                  FAQ
                </a>
              </li>
              <li>
                <a href="#Contact" className={menuLinkDefault} >
                  Contact
                </a>
              </li>
              {/* <li>
                <a href="/" className={menuLinkBlack} >
                  <span className="justify-center">Login</span>
                  <RightArrowSvg />
                </a>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
