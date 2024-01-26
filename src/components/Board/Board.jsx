import "./Board.css";
import { useState } from "react";

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

export default function Board() {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  const [inputFen, setInputFen] = useState("");

  const handleInputChange = (e) => {
    setInputFen(e.target.value);
  };

  const handleSetFen = () => {
    setFen(inputFen);
  };

  const renderSquareContent = (piece) => {
    if (isNaN(parseInt(piece, 10))) {
      // If it's a piece, render it
      return piece !== "8" && <div className="piece">{piece}</div>;
    } else {
      // If it's a number, render the appropriate number of empty squares
      const emptySquares = parseInt(piece, 10);
      return Array(emptySquares)
        .fill(null)
        .map((_, index) => (
          <div key={`empty-${index}`} className="piece empty-square" />
        ));
    }
  };

  return (
    <div className="super-board">
      <div className="input-container">
        <label htmlFor="fenInput">Enter FEN Notation:</label>
        <input
          type="text"
          id="fenInput"
          value={inputFen}
          onChange={handleInputChange}
          placeholder="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
        />
        <button onClick={handleSetFen}>Set FEN</button>
      </div>
      <div className="board">
        <div className="ranks">
          {rows.map((row) => (
            <span key={row}>{String.fromCharCode(row + 96)}</span>
          ))}
        </div>
        <div className="squares">
          {rows.map((row, i) =>
            cols.map((col, j) => (
              <div key={row + "-" + col} className={getColorClass(9 - i, j)}>
                {renderSquareContent(fen.split("/")[i].charAt(j))}
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
