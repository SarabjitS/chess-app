import "./Board.css";

export default function Board() {
  const rows = [8, 7, 6, 5, 4, 3, 2, 1];
  const cols = ["a", "b", "c", "d", "e", "f", "g", "h"];

  return (
    <div className="board">
      {rows.map((row) =>
        cols.map((col) => (
          <div>
            {row}
            {col}
          </div>
        ))
      )}
    </div>
  );
}
