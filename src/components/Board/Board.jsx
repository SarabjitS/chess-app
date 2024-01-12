import "./Board.css";
// import Files from "./notations/Files.jsx";
// import Ranks from "./notations/Ranks.jsx";
// import { clsx } from "clsx";

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
  return (
    <div className="board">
      <div className="ranks">
        {rows.map((row) => (
          <span key={row}>{String.fromCharCode(row + 96)}</span>
        ))}
      </div>
      <div className="squares">
        {rows.map((row, i) =>
          cols.map((col, j) => (
            <div
              key={row + "-" + col}
              className={getColorClass(9 - i, j)}
            ></div>
          ))
        )}
      </div>
      <div className="files">
        {cols.map((col) => (
          <span key={col}>{col}</span>
        ))}
      </div>
    </div>
  );
}
