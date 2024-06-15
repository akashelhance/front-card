// components/TableOfContents.js

"use client"
import { useState } from 'react';

const TableOfContents = ({ headings }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4 focus:outline-none"
        onClick={toggleOpen}
      >
        Table of Contents
      </button>
      <div className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <ul className="border border-gray-300 p-4 rounded-md shadow-md">
          {headings.map((heading, index) => (
            <li key={index} className="mb-2">
              <a
                href={`#${heading.id}`}
                className="text-blue-500 hover:underline hover:text-blue-700 text-lg font-medium"
              >
                {heading.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableOfContents;
