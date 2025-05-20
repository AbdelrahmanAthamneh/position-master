"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Info, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <img
                src={logo || "/placeholder.svg"}
                alt="Position Master Logo"
                className="h-10 w-10"
              />
              <span className="ml-2 text-xl font-semibold text-gray-900 dark:text-white">
                Position Master
              </span>
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/">
              <motion.span
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Home
              </motion.span>
            </Link>
            <Link to="/opening">
              <motion.span
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Openings
              </motion.span>
            </Link>
            <Link to="/middlegame">
              <motion.span
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Middlegame
              </motion.span>
            </Link>
            <Link to="/endgame">
              <motion.span
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                whileHover={{ scale: 1.05 }}
              >
                Endgame
              </motion.span>
            </Link>
            <Link to="/about">
              <motion.div
                className="flex items-center px-4 py-2 rounded-md bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Info className="h-4 w-4 mr-2" />
                <span className="font-medium text-sm">About</span>
              </motion.div>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-gray-900 shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={toggleMobileMenu}>
              <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Home
              </div>
            </Link>
            <Link to="/opening" onClick={toggleMobileMenu}>
              <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Openings
              </div>
            </Link>
            <Link to="/middlegame" onClick={toggleMobileMenu}>
              <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Middlegame
              </div>
            </Link>
            <Link to="/endgame" onClick={toggleMobileMenu}>
              <div className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                Endgame
              </div>
            </Link>
            <Link to="/about" onClick={toggleMobileMenu}>
              <div className="flex items-center px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-md text-base font-medium">
                <Info className="h-4 w-4 mr-2" />
                About
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
