"use client";

import { motion } from "framer-motion";
import { Github, ChevronRight } from "lucide-react";
import Pawn from "../assets/cc-pawn.png";
import pfp from "../assets/pfp.png";

const About = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-8">
        <motion.h1
          className="text-3xl font-bold text-gray-900 dark:text-white mb-3"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          About Position Master
        </motion.h1>
        <motion.div
          className="w-16 h-1 bg-emerald-600 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 64 }}
          transition={{ delay: 0.4 }}
        />
      </div>

      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-50 dark:bg-gray-900 p-6 flex flex-col items-center justify-center">
            <img
              src={pfp || "/placeholder.svg"}
              alt="Abdelrahman Athamneh"
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-emerald-100 dark:border-emerald-900"
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-white text-center">
              Abdelrahman Athamneh
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center mt-1">
              Chess Enthusiast & Fullstack Developer
            </p>

            <div className="flex justify-center space-x-4 mt-6">
              <motion.a
                href="https://github.com/AbdelrahmanAthamneh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <Github className="h-5 w-5 text-gray-700 dark:text-gray-300" />
              </motion.a>

              <motion.a
                href="https://chess.com/member/Abdelrahman-Athamneh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 shadow-sm transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
              >
                <img
                  src={Pawn || "/placeholder.svg"}
                  className="h-6 w-[18px]"
                  alt="Chess.com"
                />
              </motion.a>
            </div>
          </div>

          <div className="md:w-2/3 p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              The Project
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
              Position Master was created to help chess players of all levels
              improve their understanding of key positions across all phases of
              the game. By training with carefully selected positions, you can
              enhance your pattern recognition and strategic thinking abilities.
            </p>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-6">
              Features
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Categorized positions by game phase (opening, middlegame,
                  endgame)
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Detailed explanations for each position to understand key
                  concepts
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  One-click practice on Chess.com to reinforce your learning
                </span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                  Clear indication of winning and drawing positions to focus
                  your training
                </span>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p>
          Position Master is continuously being updated with new positions and
          features.
          <br />
          Have suggestions? Feel free to reach out!
        </p>
      </motion.div>
    </motion.div>
  );
};

export default About;
