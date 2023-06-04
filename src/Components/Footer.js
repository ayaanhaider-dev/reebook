import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">
            ReeBook
          </Link>
        </div>
        <div className="text-sm">
          <Link
            to="/about"
            className="mr-4 text-gray-300 hover:text-white"
          >
            About
          </Link>
          <Link
            to="/addbook"
            className="mr-4 text-gray-300 hover:text-white"
          >
            Add Book
          </Link>
          <Link
            to="/orders"
            className="mr-4 text-gray-300 hover:text-white"
          >
            Orders
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
