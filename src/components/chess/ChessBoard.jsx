import { Chessboard } from "react-chessboard";

const ChessBoard = ({ fen, orientation }) => {
  return (
    <div className="w-full h-full">
      <Chessboard
        position={fen}
        boardWidth={350}
        arePiecesDraggable={false}
        boardOrientation={orientation || "white"}
        customBoardStyle={{
          borderRadius: "0.375rem",
          boxShadow:
            "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        }}
      />
    </div>
  );
};

export default ChessBoard;
