import "./Board.css";
// import Files from "./notations/Files.jsx";
// import Ranks from "./notations/Ranks.jsx";
// import { clsx } from "clsx";

const rows = [8, 7, 6, 5, 4, 3, 2, 1];
const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

const getColorClass = (i, j) => {
  let x = "square";
  x += (i + j) % 2 === 0 ? " square-light" : " square-dark";
  return x;
};

export default function Board() {
  return (
    <div className="board">
      <div className="ranks">
        {rows.map((row) => (
          <span key={row}>{row}</span>
        ))}
      </div>
      <div className="squares">
        {rows.map((row, i) =>
          cols.map((col, j) => (
            <div key={row + "-" + col} className={getColorClass(i, j)}></div>
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
