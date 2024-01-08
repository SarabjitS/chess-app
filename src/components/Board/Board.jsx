import "./Board.css";
// import Files from "./notations/Files.jsx";
import Ranks from "./notations/Ranks.jsx";

export default function Board() {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const getColorClass = (i, j) => {
    let x = "square";
    x += (i + j) % 2 === 0 ? " square-light" : " square-dark";
    return x;
  };

  return (
    <div className="board">
      <Ranks rows={rows} />
      <div className="squares">
        {rows.map((row, i) =>
          cols.map((col, j) => (
            <div key={row + "-" + col} className={getColorClass(i, j)}>
              {row}
              {col}
            </div>
          ))
        )}
      </div>
      {/* <Files cols={cols} /> */}
    </div>
  );
}
