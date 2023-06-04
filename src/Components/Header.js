import React, { useEffect, useState } from "react";
import { useFirebase } from "../Context/firebase";
import { Link } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const { isLoggedIn, logoutUser, user } = useFirebase();
  const [userPhotoURL, setUserPhotoURL] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    if (user && user.photoURL) {
      setUserPhotoURL(user.photoURL);
    }
  }, [user]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link to="/" className="text-xl font-bold">
          ReeBook
        </Link>
        <div className="hidden lg:flex items-center ml-4 space-x-4">
        <Link to="/" className="text-sm text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </Link>
          <Link
            to="/addbook"
            className="text-sm text-gray-300 hover:text-white"
          >
            Add Book
          </Link>
          <Link to="/orders" className="text-sm text-gray-300 hover:text-white">
            Orders
          </Link>
        </div>
      </div>
      <div className="flex items-center">
        {isLoggedIn ? (
          <div className="flex items-center">
            {userPhotoURL && (
              <img
                src={userPhotoURL}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            )}
            <button
              onClick={handleLogout}
              className="ml-2 text-sm text-gray-300 hover:text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="space-x-2 font-bold text-sm text-gray-300 ">
            <Link to="/register">
              <button className="hover:text-white">
                Register
              </button>
            </Link>

            <Link to="/login">
              <button className="hover:text-white">
                Login
              </button>
            </Link>
          </div>
        )}
        <button className="ml-4 lg:hidden" onClick={toggleMobileMenu}>
          <RiMenu3Line className="w-6 h-6 text-gray-300" />
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute right-0 top-16 bg-gray-800 text-white py-2 px-4">
          <Link to="/" className="block py-2 hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="block py-2 hover:text-gray-300">
            About
          </Link>
          <Link to="/addbook" className="block py-2 hover:text-gray-300">
            Add Book
          </Link>
          <Link to="/orders" className="block py-2 hover:text-gray-300">
            Orders
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
