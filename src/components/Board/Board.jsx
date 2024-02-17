import "./Board.css";
import { useState } from "react";
import { initialBoardState } from "./consts";
import Input from "../Input";

const rows = Array(8)
  .fill()
  .map((x, i) => 8 - i);
const cols = Array(8)
  .fill()
  .map((x, i) => i + 1);

const getColorClass = (i, j) => {
  let x = "square";
  x += (i + j) % 2 === 0 ? " square-dark" : " square-light";
  return x;
};

const fenToAscii = {
  P: "♙", // White Pawn
  N: "♘", // White Knight
  B: "♗", // White Bishop
  R: "♖", // White Rook
  Q: "♕", // White Queen
  K: "♔", // White King
  p: "♟", // Black Pawn
  n: "♞", // Black Knight
  b: "♝", // Black Bishop
  r: "♜", // Black Rook
  q: "♛", // Black Queen
  k: "♚", // Black King
};

export default function Board() {
  const [boardState, setBoardState] = useState(initialBoardState);

  const renderSquareContent = (piece) => {
    if (piece === " ") {
      // If an empty string, its an empty square
      return <div className="piece empty-square" />;
    } else {
      // If its not, its an actual piece
      return <div className="piece">{fenToAscii[piece]}</div>;
    }
  };

  return (
         <div className="super-board">

<Input setBoardState={setBoardState} />
    <div className="super-board">
      <div className="board">
        <div className="ranks">
          {rows.map((row) => (
            <span key={row}>{String.fromCharCode(row + 96)}</span>
          ))}
        </div>
        <div className="squares">
                  {boardState.map((row, i) =>
            row.map((piece, j) => (
              <div key={i + "-" + j} className={getColorClass(9 - i, j)}>
                {renderSquareContent(piece)}
              </div>
            ))
          )}
        </div>
        <div className="files">
          {cols.map((col) => (
            <span key={col}>{col}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
