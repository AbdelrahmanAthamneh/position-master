"use client";
import { motion } from "framer-motion";
import CategoryCard from "../components/ui/CategoryCard";

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

const Opening = () => {
  const categories = [
    {
      title: "Coming Soon!",
      description:
        "We're working on adding opening positions. Check back soon!",
      to: "/opening/coming-soon",
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
          Opening Positions
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Select a category to explore key opening positions and ideas
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-4"
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

export default Opening;
