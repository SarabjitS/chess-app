import { useState } from "react";

export default function Input() {
  const [fen, setFen] = useState("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  const [inputFen, setInputFen] = useState("");

  const handleInputChange = (e) => {
    setInputFen(e.target.value);
  };

  const handleSetFen = () => {
    setFen(inputFen);
  };
  <div className="input-container">
    <label htmlFor="fenInput">Enter FEN Notation:</label>
    <input
      type="text"
      id="fenInput"
      value={inputFen}
      onChange={handleInputChange}
      placeholder="e.g., rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    />
    <button onClick={handleSetFen}>Set FEN</button>
  </div>;
}
