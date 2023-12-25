import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    {
      path: "/",
      title: "Start a search",
    },
    {
      path: "/my-job",
      title: "My Jobs",
    },
    {
      path: "/salary",
      title: "Salary Estimated",
    },
    {
      path: "/Post Job",
      title: "Post A Job",
    },
  ];
  return (
    <header className="max-w-screen-2xl contrast mx-auto xl:px-24 px-4 bg-grey ">
      <nav className="flex justify-between items-center py-6">
        <a className=" flex items-center gap-2 text-2xl text-black" href="/">
          <svg
            xmlns="https://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575E2"
              fillOpacity="0.4"
            />

            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2" />
          </svg>
          {""}
          <span>JobSynergy</span>{" "}
        </a>
        {/* nav items for large devices */}
        <ul className="hidden md:flex gap-12 ">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "blue" : "inherit",
                  };
                }}
                to={path}
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
        {/* signup and login Button */}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
          <Link className="py-2 px-5 border rounded" to="/login">
            {" "}
            log in
          </Link>
          <Link
            className="py-2 px-5 border rounded bg-blue text-white"
            to="/sign-up"
          >
            {" "}
            sign up
          </Link>
        </div>

        {/* mobile menu */}

        <div className="md:hidden block">
          <button onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="w-5 h-5 text-primary " />
            ) : (
              <FaBarsStaggered className="w-5 h-5 text-primary " />
            )}
          </button>
        </div>
      </nav>

      {/* navItems for mobile device */}
      <div
        className={`px-4 bg-black py-5 rounded-sm ${
          isMenuOpen ? "" : "hidden"
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                style={({ isActive, isPending }) => {
                  return {
                    color: isActive ? "blue" : "inherit",
                  };
                }}
                to={path}
                className={({ isActive }) => {
                  return isActive ? "active" : "";
                }}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            <Link to="/login"> log in</Link>
          </li>
          <li className="text-white py-1">
            <Link to="/sign-up"> Sign up</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
