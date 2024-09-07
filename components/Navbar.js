

"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null); // State to keep track of selected link

  // Function to toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle click on NavItem
  const handleItemClick = (path) => {
    setSelected(path);
    setIsOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-900 text-white shadow-lg rounded-b-lg fixed w-full top-0 left-0 z-50 p-4">

      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold">cardrecommend</div>
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
        <div className={`lg:flex flex-grow justify-center items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:ml-auto lg:space-x-8 lg:items-center">
            <NavItem href="/" selected={selected} onItemClick={handleItemClick}>Home</NavItem>
            <NavItem href="/blog" selected={selected} onItemClick={handleItemClick}>Blog</NavItem>

            <NavItem href="/credit-card-issuers" selected={selected} onItemClick={handleItemClick}>Credit Card Issuers</NavItem>
            <NavItem href="/credit-card-categories" selected={selected} onItemClick={handleItemClick}>Credit Card Categories</NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ href, selected, onItemClick, children }) => {
  return (
    <li className="py-2 lg:py-0" onClick={() => onItemClick(href)}>
      <Link href={href}
        className={`text-lg lg:text-xl hover:bg-rose-700 hover:text-white font-semibold p-2 rounded ${selected === href ? 'bg-rose-700 text-white font-bold' : ''}`}>
          {children}
      </Link>
    </li>
  );
};

export default Navbar;
