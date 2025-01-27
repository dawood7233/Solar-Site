import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/${id}`);
    setMenuOpen(false); // Close menu on click
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "form", label: "Service" },
    { id: "about", label: "About Us" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="p-4 bg-[#35acac] text-black fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="container flex justify-between h-16 mx-auto">
        {/* Logo */}
        <div className="flex items-center p-2">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer text-lg font-bold"
            onClick={() => handleNavigate("home")}
          >
            Solar Tech
          </ScrollLink>
        </div>
        {/* Hamburger Button */}
        <button
          className="flex justify-end p-4 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
        {/* Unified Menu */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:items-stretch space-y-3 md:space-y-0 md:space-x-3 absolute md:static top-16 left-0 w-full md:w-auto bg-[#35acac] md:bg-transparent md:top-0 p-4 md:p-0`}
        >
          {menuItems.map((item) => (
            <li key={item.id} className="flex">
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                className="block w-full px-4 py-4 cursor-pointer hover:text-white"
                onClick={() => handleNavigate(item.id)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
