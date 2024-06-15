"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-red-500 via-pink-500 via-orange-500 to-yellow-500 text-white shadow-lg rounded-b-lg fixed w-full top-0 left-0 z-50 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/"
            className="text-white text-2xl font-bold">Logo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex sm:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed. */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Icon when menu is open. */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <div className="flex space-x-4">
              <Link href="/"
               className="text-white hover:bg-rose-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">Home
              </Link>
              <Link href="/about"
                className="text-white hover:bg-rose-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium">About
              </Link>

              {/* Dropdown Example */}
              <div className="relative">
                <button
                  className="text-white hover:bg-rose-700 hover:text-white px-3 py-2 rounded-md text-lg font-medium flex items-center"
                  onClick={toggleNavbar}
                >
                  <span>Dropdown</span>
                  {/* Dropdown Arrow */}
                  <svg
                    className="h-5 w-5 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 9.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="py-1" role="none">
                      <Link href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 1
                      </Link>
                      <Link href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Option 2
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


