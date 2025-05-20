"use client";
import { motion } from "framer-motion";
import Rook from "../assets/rook.svg";
import King from "../assets/king.svg";
import Bishop from "../assets/bishop.svg";
import Knight from "../assets/knight.svg";
import Queen from "../assets/queen.svg";
import CategoryCard from "../components/ui/CategoryCard";
import Hashtag from "../assets/hash.svg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Endgame = () => {
  const categories = [
    {
      title: "Checkmates",
      description: "Master essential checkmate patterns with various pieces",
      icon: Hashtag,
      to: "/endgame/checkmates",
    },
    {
      title: "Rook Endgames",
      description: "Study key rook endgame positions and principles",
      icon: Rook,
      to: "/endgame/rook",
    },
    {
      title: "King & Pawn Endgames",
      description: "Learn fundamental king and pawn endgame concepts",
      icon: King,
      to: "/endgame/king-pawn",
    },
    {
      title: "Bishop Endgames",
      description: "Master important bishop endgame positions",
      icon: Bishop,
      to: "/endgame/bishop",
    },
    {
      title: "Knight Endgames",
      description: "Explore critical knight endgame techniques",
      icon: Knight,
      to: "/endgame/knight",
    },
    {
      title: "Queen vs Pawn",
      description: "Learn queen vs pawn endgame techniques",
      icon: Queen,
      to: "/endgame/queen-pawn",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Endgame Positions
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select a category to explore key endgame positions and techniques
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {categories.map((category) => (
          <motion.div key={category.title} variants={item}>
            <CategoryCard {...category} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Endgame;
