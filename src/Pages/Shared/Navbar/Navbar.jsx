import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = (
    <>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3 rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3  rounded-md hover:text-black"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/add_products"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3   rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3  rounded-md hover:text-black"
          }
        >
          Add Products
        </NavLink>
      </li>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/profile"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3   rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3  rounded-md hover:text-black"
          }
        >
          Profile
        </NavLink>
      </li>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3 rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3 rounded-md hover:text-black"
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="flex flex-col md:flex-row gap-4 justify-between md:items-center  bg-[#687EFF] text-white md:px-4 md:container md:rounded-full md:mx-auto md:mt-4">
      <div className="flex items-center">
        <img className="w-20 h-24" src={logo} alt="" />
        <Link className="pl-3 text-4xl font-bold">Velocity Drive</Link>
      </div>
      <div
        onClick={() => {
          setMenuOpen(!menuOpen);
        }}
        className="flex flex-col gap-1 absolute w-10 top-[28px] right-2 md:hidden mr-2 p-2"
      >
        <span className="w-full h-1 bg-white"></span>
        <span className="w-full h-1 bg-white"></span>
        <span className="w-full h-1 bg-white"></span>
      </div>
      <ul
        className={`flex-col md:flex-row md:flex text-center md:pt-3 mt-3 md:mt-0 pb-2 font-bold gap-4 ${
          menuOpen ? "hidden" : ""
        }`}
      >
        {navLinks}
      </ul>
    </nav>
  );
};

export default Navbar;
