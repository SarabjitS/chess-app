export default function Ranks({ rows }) {
  return (
    <div className="ranks">
      {rows.map((row) => (
        <span>{row}</span>
      ))}
    </div>
  );
}
