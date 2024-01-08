import "./Board.css";

export default function Board() {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  const getClassName = (i, j) => {
    let x = "square";
    x += (i + j) % 2 === 0 ? " square-light" : " square-dark";
    return x;
  };

  return (
    <div className="board">
      <div className="squares">
        {rows.map((row, i) =>
          cols.map((col, j) => (
            <div key={row + "-" + col} className={getClassName(i, j)}>
              {row}
              {col}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
