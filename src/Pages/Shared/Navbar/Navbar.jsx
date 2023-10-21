import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import userDefaultPic from "../../../assets/images/avatar.png";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleSignOut = () => {
    logOut()
      .then((result) => console.log(result))
      .catch((error) => console.error(error));
  };
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
              ? "bg-sky-400 py-3 px-36 md:px-3 rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-36 md:px-3  rounded-md hover:text-black"
          }
        >
          Add Products
        </NavLink>
      </li>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3   rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3  rounded-md hover:text-black"
          }
        >
          MyCart
        </NavLink>
      </li>
      <li className="mb-5 md:mb-0">
        <NavLink
          to="/login"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-sky-400 py-3 px-40 md:px-3 rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3 rounded-md hover:text-black"
          }
        >
          Login
        </NavLink>
      </li>
    </>
  );
  return (
    <nav className="flex flex-col md:flex-row gap-4 justify-between md:items-center  bg-[#687EFF] text-white md:px-4 lg:container lg:rounded-full md:mx-auto lg:mt-4">
      <div className="flex items-center">
        <img className="w-20 h-24 md:hidden lg:block" src={logo} alt="" />
        <Link className="pl-3 text-3xl md:text-2xl lg:text-4xl font-bold">
          Velocity Drive
        </Link>
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
        className={`flex-col md:flex-row md:flex text-center md:pt-3 mt-3 md:mt-0 pb-2 font-bold gap-4 md:items-center ${
          menuOpen ? "hidden" : ""
        }`}
      >
        {navLinks}
        <div className="flex items-center space-x-3 bg-[#80B3FF] px-5 py-3 rounded-full justify-center mx-4 md:mx-0">
          {user && user.displayName ? (
            <div className="hidden lg:block">
              <h2>{user.displayName}</h2>
            </div>
          ) : user ? (
            <div className="hidden lg:block">
              <h2>{user.email}</h2>
            </div>
          ) : null}
          {user && user.photoURL ? (
            <label className="btn btn-ghost btn-circle avatar md:hidden lg:block">
              <div className="w-110 rounded-full">
                <img src={user.photoURL} />
              </div>
            </label>
          ) : user ? (
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-110 rounded-full">
                <img src={userDefaultPic} />
              </div>
            </label>
          ) : null}
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn bg-green-400 text-white"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn bg-gray-400 text-white">Log in</button>
            </Link>
          )}
        </div>
        <div>
          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              onChange={handleToggle}
              checked={theme === "light" ? false : true}
            />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-10 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
