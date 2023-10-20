import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import userDefaultPic from "../../../assets/images/avatar.png";
import { AuthContext } from "../../../Providers/AuthProviders";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

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
              ? "bg-sky-400 py-3 px-40 md:px-3   rounded-md text-white"
              : "hover:bg-[#B6FFFA] py-3 px-40 md:px-3  rounded-md hover:text-black"
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
        className={`flex-col md:flex-row md:flex text-center md:pt-3 mt-3 md:mt-0 pb-2 font-bold gap-4 md:items-center ${
          menuOpen ? "hidden" : ""
        }`}
      >
        {navLinks}
        <div className="flex items-center space-x-3 bg-[#80B3FF] px-5 py-3 rounded-full justify-center mx-4 md:mx-0">
          {user && user.displayName ? (
            <div className="hidden md:block">
              <h2>{user.displayName}</h2>
            </div>
          ) : user ? (
            <div className="hidden md:block">
              <h2>{user.email}</h2>
            </div>
          ) : null}
          {user && user.photoURL ? (
            <label className="btn btn-ghost btn-circle avatar">
              <div className="w-110 rounded-full ">
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
      </ul>
    </nav>
  );
};

export default Navbar;
