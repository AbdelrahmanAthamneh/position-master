"use client";
import { motion } from "framer-motion";
import CategoryCard from "../components/ui/CategoryCard";
import Pawn from "../assets/pawn.svg";
import Book from "../assets/book.png";
import Knight from "../assets/knight.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const categories = [
    {
      title: "Opening",
      description:
        "Master the first phase of the game with opening theory and key positions",
      icon: Book,
      to: "/opening",
    },
    {
      title: "Middlegame",
      description:
        "Improve your tactical and positional understanding in complex middlegames",
      icon: Knight,
      to: "/middlegame",
    },
    {
      title: "Endgame",
      description:
        "Perfect your technique with essential endgame positions and principles",
      icon: Pawn,
      to: "/endgame",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome to Position Master
        </h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Improve your chess skills by studying and mastering key positions from
          all phases of the game
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-3"
      >
        {categories.map((category) => (
          <motion.div key={category.title} variants={item}>
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          Why Train with Position Master?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Pattern Recognition
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Develop your ability to recognize key patterns and positions that
              frequently occur in games
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Strategic Understanding
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn the strategic ideas behind important positions to improve
              your decision-making
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
              Practical Application
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Practice positions directly on Chess.com to reinforce your
              learning and build muscle memory
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
