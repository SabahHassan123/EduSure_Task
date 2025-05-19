import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  TbHexagonLetterCFilled,
  TbHexagonLetterOFilled,
  TbHexagonLetterUFilled,
  TbHexagonLetterRFilled,
  TbHexagonLetterSFilled,
  TbHexagonLetterEFilled,
} from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { RiMenu4Line } from "react-icons/ri";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/courses", label: "Courses" },
    { path: "/cart", label: "Cart" },
    { path: "/login", label: "Login" },
    { path: "/admin", label: "Admin" },
  ];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-4  relative z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-1">
          <TbHexagonLetterCFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterOFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterUFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterRFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterSFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterEFilled className="text-2xl md:text-3xl" />
          <TbHexagonLetterSFilled className="text-2xl md:text-3xl" />
        </div>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <HiX className="text-3xl" />
            ) : (
              <RiMenu4Line className="text-3xl" />
            )}
          </button>
        </div>

        {/* Nav Links (desktop) */}
        <ul className="hidden md:flex gap-6">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="hover:text-blue-100 transition rounded px-2 py-1 text-lg font-semibold"
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Nav Links (mobile sliding menu) */}
      <div
        className={`fixed top-14 left-0 h-full w-full bg-gradient-to-r from-indigo-500 to-purple-600 p-6 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className="block hover:bg-white hover:text-indigo-600 transition px-3 py-2 rounded text-lg font-medium"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
