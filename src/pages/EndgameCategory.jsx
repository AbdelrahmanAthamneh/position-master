"use client";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import PositionCard from "../components/chess/PositionCard";

const EndgameCategory = () => {
  const { category } = useParams();

  const getPositions = () => {
    switch (category) {
      case "checkmates":
        return [
          {
            name: "Queen & King vs King",
            description:
              "A fundamental checkmate pattern where the queen restricts the enemy king's movement while your king approaches to deliver checkmate. This is one of the first checkmate techniques every chess player should master.",
            fen: "8/8/8/3k4/6Q1/8/8/4K3 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Rook & King vs King",
            description:
              "The rook and king work together to force the enemy king to the edge of the board, creating a mating net. This essential endgame technique requires precise coordination between your pieces.",
            fen: "8/8/8/3k4/8/6R1/8/K7 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Two Rooks vs King",
            description:
              "With two rooks, you can create an efficient mating net by restricting the enemy king's movement. This checkmate can be executed much faster than with a single rook and requires less precision.",
            fen: "8/8/8/3k4/6R1/6R1/8/K7 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Two Bishops vs King",
            description:
              "Two bishops can create a diagonal mating net that forces the enemy king to the corner. This checkmate requires careful coordination to avoid stalemate while gradually restricting the king's movement.",
            fen: "8/8/8/3k4/6B1/6B1/8/K7 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "intermediate",
          },
          {
            name: "Bishop & Knight vs King",
            description:
              "One of the most challenging checkmates to execute, requiring precise coordination between the bishop and knight to force the enemy king to a corner that matches your bishop's color.",
            fen: "8/8/8/3k4/8/6B1/4N3/K7 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "advanced",
          },
          {
            name: "Rook & Queen vs King",
            description:
              "A powerful combination that can quickly checkmate the enemy king. The queen and rook work together to restrict the king's movement and deliver checkmate efficiently.",
            fen: "8/1R6/4k3/8/8/8/6Q1/K7 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "2 Rooks vs King & Pawns",
            description:
              "In this position, you must navigate through the enemy pawn structure to deliver checkmate with your two rooks. This requires careful planning to avoid stalemate or allowing counterplay.",
            fen: "8/pp3kp1/2p2p2/8/8/8/7R/K6R w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "2 Queens vs King",
            description:
              "With two queens, you can create a powerful mating net that restricts the enemy king's movement. This checkmate is relatively straightforward but requires careful coordination to avoid stalemate.",
            fen: "8/8/3k4/8/8/7K/4Q3/5Q2 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
        ];
      case "rook":
        return [
          {
            name: "Rook & King vs Pawn",
            description:
              "A very basic position where White can win by shouldering the Black king to enable the rook to capture the pawn.",
            orientation: "white",
            outcome: "winning",
            fen: "8/3R4/8/8/kp2K3/8/8/8 b - - 0 1",
            difficulty: "beginner",
          },
          {
            name: "Rook vs Pawn",
            description:
              "A very basic position where Black can draw by keeping the king guarding the pawn and preventing White’s king from supporting the rook’s capture.",
            orientation: "black",
            outcome: "drawing",
            fen: "8/4R3/8/5K2/3p4/2k5/8/8 b - - 0 1",
            difficulty: "beginner",
          },
          {
            name: "Rook & King vs 3 Pawns",
            description:
              "A position where White can win only with the correct technique: shouldering the Black king away to clear the path for the rook to capture the pawns.",
            orientation: "white",
            outcome: "winning",
            fen: "8/8/pk6/1p2K3/2p4R/8/8/8 w - - 0 1",
            difficulty: "intermediate",
          },
          {
            name: "3rd/6th Rank Defense",
            description:
              "A position where Black can draw by preventing the pawn from advancing past the 3rd/6th rank, using the rook on the sixth rank to delay promotion.",
            orientation: "black",
            outcome: "drawing",
            fen: "2r1k3/8/8/4PK2/8/8/6R1/8 b - - 0 1",
            difficulty: "intermediate",
          },
          {
            name: "Backrank Defense",
            description:
              "A position where Black can draw by tucking the king into the corner and keeping the rook on the back rank, even if White’s pawn has crossed the 3rd/6th rank (only works for a-, b-, g-, and h-file pawns).",
            orientation: "black",
            outcome: "drawing",
            fen: "1r5k/8/5K2/6P1/4R3/8/8/8 w - - 0 1",
            difficulty: "beginner",
          },
          {
            name: "Failed Backrank Defense",
            description:
              "A position where White can refute the back-rank defense because a c-, d-, e-, or f-file pawn has advanced to the 6th rank, cutting off Black’s defensive resources.",
            orientation: "white",
            outcome: "winning",
            fen: "1r4k1/8/6K1/5P2/8/2R5/8/8 b - - 0 1",
            difficulty: "beginner",
          },
          {
            name: "Lucena Position",
            description:
              "A position where White can promote the pawn: Black’s king is cut off by the rook, so all White needs to do is clear the way and push the pawn to promotion.",
            orientation: "white",
            outcome: "winning",
            fen: "k2K4/3P4/8/1R6/8/8/8/3r4 w - - 0 1",
            difficulty: "beginner",
          },
        ];
      case "king-pawn":
        return [
          {
            name: "King vs King & Flank Pawn",
            description:
              "Despite White having the opposition against black in order to escort their pawn to the promotion square. black actually has a method to draw the game by standing in the corner as flank pawns can't be promoted if the promotion corner square is occupied by the king.",
            fen: "8/k7/8/K7/P7/8/8/8 b - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "King vs King & Knight's Pawn",
            description:
              "In this position, black has a tiny stalemate trick against white when promoting their knight's pawn. but white can easily win this with careful coordination.",
            fen: "8/k7/8/1K6/1P6/8/8/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Pawn promotion",
            description:
              "A very basic position where white can promote their pawn to a queen or rook and win the game. This is a position that every chess player should know. use the opposition technique to escort your pawn to the promotion square (doesn't work with flank pawns)",
            fen: "8/5k2/8/8/8/8/3P1K2/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Stopping Pawn promotion",
            description:
              "In this position, black can stop white from promoting their pawn by using the opposition technique. This is a position that every chess player should know.",
            fen: "8/8/8/4k3/8/3K4/3P4/8 b - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Down a pawn King & Pawn endgame",
            description:
              "In this position, black is able to draw white down a pawn due to being ahead in king activity.",
            fen: "8/8/4k1p1/7p/5P1P/5KP1/8/8 b - - 0 ",
            orientation: "black",
            outcome: "drawing",
            difficulty: "intermediate",
          },
        ];
      case "bishop":
        return [
          {
            name: "Opposite Color Bishops - Winning",
            description:
              "In this position with opposite-colored bishops, white has a decisive advantage by controlling both sides of the board. By carefully advancing both pawns, white can create threats that black's bishop and king cannot simultaneously address.",
            fen: "8/8/2k3b1/8/1KP2P2/4B3/8/8 w - - 1 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "intermediate",
          },
          {
            name: "Opposite-Colored Bishops - Draw",
            description:
              "This position demonstrates the drawing potential of opposite-colored bishops. As black, you can establish a blockade by positioning your bishop to control the promotion squares of white's pawns while using your king to support the defense.",
            fen: "8/2k5/8/8/2PP3b/2K2B2/8/8 b - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "intermediate",
          },
          {
            name: "Flank Pawn Promotion - Winning",
            description:
              "White has a winning advantage with the correct bishop that controls the promotion square. By coordinating the king and bishop, white can escort the pawn to promotion while preventing black's king from establishing a blockade.",
            fen: "2k5/5B2/8/8/8/P7/1K6/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Flank Pawn Promotion - Draw",
            description:
              "This position is drawn because white has the 'wrong bishop' that cannot control the promotion square. As black, you can position your king in the corner to establish a fortress, preventing white from making progress.",
            fen: "2k5/8/8/4B3/8/P7/1K6/8 b - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Non-Flank Pawn Promotion - Winning",
            description:
              "White has a winning advantage with a central pawn and bishop. The key to victory is maintaining the opposition with your king while using the bishop's mobility to create zugzwang positions that force black's king to retreat.",
            fen: "8/8/4k3/8/4KP2/8/7B/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Opposite Color Bishop - Draw",
            description:
              "This position demonstrates a classic drawing technique with opposite-colored bishops. As black, you can establish a blockade by positioning your bishop to control the square in front of white's pawn, creating an impenetrable fortress.",
            fen: "8/8/5k2/2b5/5K2/5P2/2B5/8 b - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Same Color Bishop - Draw",
            description:
              "Despite having bishops of the same color, this position is drawn because black's king can maintain a blockade in front of white's pawn. The key defensive technique is to keep your bishop active while preventing white's king from advancing.",
            fen: "8/1k6/5b2/3P4/1K3B2/8/8/8 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Same Color Bishop - Winning",
            description:
              "White has a winning advantage with two connected passed pawns against a same-colored bishop. The key to victory is advancing both pawns in coordination, creating threats that black's bishop and king cannot simultaneously address.",
            fen: "5B2/b2k4/8/8/1PP5/2K5/8/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
        ];
      case "knight":
        return [
          {
            name: "The Knight's Merry go round",
            description:
              "Black here can draw the game by hopping around in the draw loop. sacrificing it self for the pawn if black ever tried pushing it. If you ever get the chance to fork. make sure to find it or you'd lose!'",
            fen: "8/7n/5K1P/8/8/8/8/k7 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Down a pawn Knight endgame",
            description:
              "Despite black being down a pawn, black has a chance to draw the game due to being able to sacrifice their own knight for white's last pawn",
            fen: "8/2n2kpp/8/3p4/3P4/5N2/4KPPP/8 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "advanced",
          },
          {
            name: "Knight vs center pawn",
            description:
              "Black here can draw the game by making sure white can't advance the pawn by blockading it or by sacrificing the knight for it. forks happen often in this position so look for them to have a faster draw!'",
            fen: "4n3/4P3/3K4/8/8/8/8/k7 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
        ];
      case "queen-pawn":
        return [
          {
            name: "Queen vs Center Pawn",
            description:
              "White has a winning technique to stop the pawn from promoting with correct coordination to avoid stalemate.",
            fen: "K1Q5/8/8/8/8/8/3kp3/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Queen vs Knight's Pawn",
            description:
              "White has a winning technique to stop the pawn from promoting with correct coordination to avoid stalemate.",
            fen: "K1Q5/8/8/8/8/8/5kp1/8 w - - 0 1",
            orientation: "white",
            outcome: "winning",
            difficulty: "beginner",
          },
          {
            name: "Queen vs Bishop's Pawn",
            description:
              "Black has a technique to draw the game by staying in the corner when the queen gets the chance to progress through the winning technique, because then it would lead into stalemate",
            fen: "K1Q5/8/8/8/8/8/4kp2/8 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
          {
            name: "Queen vs Rook's Pawn",
            description:
              "Black has a technique to draw the game by staying in the corner when the queen gets the chance to progress through the winning technique, because then it would lead into stalemate",
            fen: "K1Q5/8/8/8/8/8/6kp/8 w - - 0 1",
            orientation: "black",
            outcome: "drawing",
            difficulty: "beginner",
          },
        ];
      default:
        return [];
    }
  };

  const positions = getPositions();

  const getCategoryTitle = () => {
    switch (category) {
      case "checkmates":
        return "Checkmate Patterns";
      case "rook":
        return "Rook Endgames";
      case "king-pawn":
        return "King & Pawn Endgames";
      case "bishop":
        return "Bishop Endgames";
      case "knight":
        return "Knight Endgames";
      case "queen-pawn":
        return "Queen vs Pawn Endgames";
      default:
        return "Endgame Positions";
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
          Master these key positions to improve your endgame technique
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
            difficulty={position.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default EndgameCategory;
