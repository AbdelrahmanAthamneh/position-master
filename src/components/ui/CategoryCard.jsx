"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CategoryCard = ({ title, description, icon, to }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-all"
    >
      <Link to={to} className="block p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg">
            <img
              src={icon || "/placeholder.svg"}
              className="h-6 w-6 text-emerald-600 dark:text-emerald-400"
              alt={title}
            />
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              {title}
            </h3>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
