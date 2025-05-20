"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Copy,
  ExternalLink,
  Award,
  Handshake,
  AlertTriangle,
  Baby,
  Swords,
} from "lucide-react";
import ChessBoard from "./ChessBoard";

const PositionCard = ({
  name,
  description,
  fen,
  orientation,
  outcome,
  difficulty,
}) => {
  const [copied, setCopied] = useState(false);

  const copyFen = () => {
    navigator.clipboard.writeText(fen);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const openInChessCom = () => {
    const url = `https://chess.com/practice/custom?fen=${encodeURIComponent(
      fen
    )}&color=${orientation || "white"}`;
    window.open(url, "_blank");
  };

  const renderDifficultyBadge = () => {
    if (!difficulty) return null;

    const difficultyConfig = {
      beginner: {
        color:
          "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400",
        icon: <Baby className="h-3.5 w-3.5 mr-1" />,
        label: "Beginner",
      },
      intermediate: {
        color:
          "bg-yellow-50 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400",
        icon: <Swords className="h-3.5 w-3.5 mr-1" />,
        label: "Intermediate",
      },
      advanced: {
        color: "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400",
        icon: <AlertTriangle className="h-3.5 w-3.5 mr-1" />,
        label: "Advanced",
      },
    };

    const config = difficultyConfig[difficulty];
    if (!config) return null;

    return (
      <div
        className={`flex items-center text-sm font-medium ${config.color} px-2 py-1 rounded ml-2`}
      >
        {config.icon}
        {config.label}
      </div>
    );
  };

  if (!fen) {
    return (
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          {description && (
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h3>
          <div className="flex items-center">
            {outcome && (
              <>
                {outcome === "winning" && (
                  <div className="flex items-center text-green-600 dark:text-green-500 text-sm font-medium bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded">
                    <Award className="h-3.5 w-3.5 mr-1" />
                    Winning
                  </div>
                )}
                {outcome === "drawing" && (
                  <div className="flex items-center text-blue-600 dark:text-blue-500 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded">
                    <Handshake className="h-3.5 w-3.5 mr-1" />
                    Drawing
                  </div>
                )}
              </>
            )}
            {renderDifficultyBadge()}
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {description}
        </p>

        <div className="flex justify-center mb-4">
          <div className="w-full max-w-[350px]">
            <ChessBoard fen={fen} orientation={orientation} />
          </div>
        </div>

        <div className="space-y-3">
          <div
            className="relative bg-gray-50 dark:bg-gray-900 p-2 rounded text-xs font-mono cursor-pointer group"
            onClick={copyFen}
          >
            <code className="text-gray-800 dark:text-gray-200 break-all">
              {fen}
            </code>
            <motion.div
              className="absolute top-2 right-2 opacity-50 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Copy className="h-3.5 w-3.5 text-gray-500 dark:text-gray-400" />
            </motion.div>

            {copied && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-green-500 bg-opacity-90 rounded text-white text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                Copied!
              </motion.div>
            )}
          </div>

          <motion.button
            className="w-full flex items-center justify-center px-3 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded shadow-sm transition-colors"
            onClick={openInChessCom}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="h-3.5 w-3.5 mr-2" />
            Practice on Chess.com
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PositionCard;
