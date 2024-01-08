export default function Files({ cols }) {
  return (
    <div className="files">
      {cols.map((col) => (
        <span>{col}</span>
      ))}
    </div>
  );
}
