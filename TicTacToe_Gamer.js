 function populateBoard(width, height, pieces) {
    let board = [];
    for (let i = 0; i < height; i++) {
      board.push(new Array(width).fill(" "));
    }

    for (let piece of pieces) {
      let row = piece.row;
      let column = piece.column;
      board[column][row] = piece.value;
    }  
    return board;
 }


  let pieces = [
    {row: 0, column: 0, value: "X"},
    {row: 0, column: 1, value: "X"},
    {row: 0, column: 2, value: "O"},
    {row: 1, column: 0, value: "O"},
    {row: 1, column: 2, value: "X"},
    {row: 2, column: 0, value: "X"},
    {row: 2, column: 1, value: "O"},
    {row: 2, column: 2, value: "O"},
  ];
  let boards = populateBoard(3, 3, pieces);
  for (let row of boards) {
    console.log(row.join(" "));
  }