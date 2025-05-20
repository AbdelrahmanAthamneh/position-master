"use client";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PositionCard from "../components/chess/PositionCard";

const MiddlegameCategory = () => {
  const { category } = useParams();

  const getPositions = () => {
    switch (category) {
      case "coming-soon":
        return [
          {
            name: "Coming Soon!",
            description:
              "We're working on adding middlegame positions to this category. Check back soon for updates!",
          },
        ];
      default:
        return [];
    }
  };

  const positions = getPositions();

  const getCategoryTitle = () => {
    switch (category) {
      case "coming-soon":
        return "Coming Soon!";
      default:
        return "Middlegame Positions";
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {getCategoryTitle()}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Master these key middlegame positions to improve your tactical and
          strategic understanding
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-2">
        {positions.map((position, index) => (
          <PositionCard
            key={index}
            name={position.name}
            description={position.description}
            fen={position.fen}
            orientation={position.orientation}
            outcome={position.outcome}
          />
        ))}
      </div>
    </div>
  );
};

export default MiddlegameCategory;
