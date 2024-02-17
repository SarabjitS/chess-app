export const createBoardStateFromFen = (fen) => {
  console.log("fen", fen);
  const boardState = fen.split("/").map((line) => {
    const newLine = [];

    for (let char of line) {
      const charAsNumber = parseInt(char, 10);
      if (isNaN(charAsNumber)) {
        newLine.push(char);
      } else {
        for (let i = 0; i < charAsNumber; i++) {
          newLine.push(" ");
        }
      }
    }

    return newLine;
  });

  console.log("boardState", boardState);
  return boardState;
};
export const initialStateFen = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR";
export const initialBoardState = createBoardStateFromFen(initialStateFen);
