import React from "react";
import DarkModeToggle from "./DarkModeToggle";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="shadow sticky z-50 top-0 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/* Logo with Link */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Dark Mode Toggle */}
          <div className="flex items-center lg:order-2">
            <DarkModeToggle />
          </div>

          {/* Navigation Links */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {/* NavLink with dynamic active class */}
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-900 dark:text-gray-100"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-900 dark:text-gray-100"
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-900 dark:text-gray-100"
                  }
                >
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/more"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-600 dark:text-orange-400"
                      : "text-gray-900 dark:text-gray-100"
                  }
                >
                  More
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
