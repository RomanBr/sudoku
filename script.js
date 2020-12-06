var cells = new Array (9);
let boardValues, mat;


//invalid board matrix;
const mat0 = [[2, 4, 7, 5, 9, 6, 8, 3, 1], 
			[9, 3, 1, 4, 2, 5, 7, 6, 8],
			[2, 7, 3, 4, 9, 8, 5, 1, 6],
			[9, 8, 6, 7, 2, 5, 1, 4, 3],
			[6, 2, 7, 8, 9, 3, 1, 5, 4],
			[4, 1, 9, 7, 3, 2, 8, 6, 5],
			[5, 4, 7, 6, 3, 1, 2, 8, 9],
			[2, 6, 3, 1, 5, 4, 7, 8, 9],
			[8, 7, 5, 2, 1, 4, 6, 3, 9]];

			   
//valid board matrixes;
const mat1 = [[8, 3, 5, 4, 1, 6, 9, 2, 7],
			[2, 9, 6, 8, 5, 7, 4, 3, 1],
			[4, 1, 7, 2, 9, 3, 6, 5, 8],
			[5, 6, 9, 1, 3, 4, 7, 8, 2],
			[1, 2, 3, 6, 7, 8, 5, 4, 9],
			[7, 4, 8, 5, 2, 9, 1, 6, 3],
			[6, 5, 2, 7, 8, 1, 3, 9, 4],
			[9, 8, 1, 3, 4, 5, 2, 7, 6],
			[3, 7, 4, 9, 6, 2, 8, 1, 5]]			   

const mat2 = [[5, 3, 4, 6, 7, 8, 9, 1, 2],
			[6, 7, 2, 1, 9, 5, 3, 4, 8],
			[1, 9, 8, 3, 4, 2, 5, 6, 7],
			[8, 5, 9, 7, 6, 1, 4, 2, 3],
			[4, 2, 6, 8, 5, 3, 7, 9, 1],
			[7, 1, 3, 9, 2, 4, 8, 5, 6],
			[9, 6, 1, 5, 3, 7, 2, 8, 4],
			[2, 8, 7, 4, 1, 9, 6, 3, 5],
			[3, 4, 5, 2, 8, 6, 1, 7, 9]]
				
const mat3 = [[7, 8, 4, 1, 5, 9, 3, 2, 6], 
			[5, 3, 9, 6, 7, 2, 8, 4, 1], 
			[6, 1, 2, 4, 3, 8, 7, 5, 9], 
			[9, 2, 8, 7, 1, 5, 4, 6, 3], 
			[3, 5, 7, 8, 4, 6, 1, 9, 2], 
			[4, 6, 1, 9, 2, 3, 5, 8, 7], 
			[8, 7, 6, 3, 9, 4, 2, 1, 5], 
			[2, 4, 3, 5, 6, 1, 9, 7, 8], 
			[1, 9, 5, 2, 8, 7, 6, 3, 4]]

const mat4 = [[8, 9, 5, 7, 4, 2, 1, 3, 6], 
			[2, 7, 1, 9, 6, 3, 4, 8, 5], 
			[4, 6, 3, 5, 8, 1, 7, 9, 2], 
			[9, 3, 4, 6, 1, 7, 2, 5, 8], 
			[5, 1, 7, 2, 3, 8, 9, 6, 4], 
			[6, 8, 2, 4, 5, 9, 3, 7, 1], 
			[1, 5, 9, 8, 7, 4, 6, 2, 3], 
			[7, 4, 6, 3, 2, 5, 8, 1, 9], 
			[3, 2, 8, 1, 9, 6, 5, 4, 7]]	


		
const sudokuBoards = [mat1, mat2, mat3, mat4];	


		init();
		setBoardValues();



		
		

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



	function init () {
		var td, tr, input, row;
		var board = document.getElementById ("sudokuBoard");
		for (let i = 0; i < 9; i++) {
			tr = document.createElement ("tr");
			row = new Array (9);
				for (let j = 0; j < 9; j++) {
					var td = document.createElement ("td");
					var input = document.createElement ("input");
					input.setAttribute ("type", "text");
					input.setAttribute ("maxlength", "1");
					row[j] = input;
					td.append (input);
					tr.append (td);
				}
				cells[i] = row;
				board.append (tr);
		}
		
		mat = mat3;
	}

	function setBoardValues () {
		boardValues = levelDifficulty (1, mat);
		console.log (mat);
		console.log (boardValues);

		
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				if (boardValues[i][j] != 0) {
					cells[i][j].value = boardValues[i][j];
					cells[i][j].disabled = true;
				}
			}
		}	
	}

	function levelDifficulty (n, board) {
		var x, y, board = [...board];
		for (let i = 0; i < 20 * n; i++) {
			do {
				x = rndNum(9);
				y = rndNum(9);	
			} while (board[y][x] == 0)		
			
			if (board[y][x] == 0) alert (x + " : " + y);
			
			board[y][x] = 0;
		}
		return board;
	}



	function rndNum (n) { 
		var num;
		for (let i = 0; i < 10; i++)
			num = Math.floor(Math.random() * n); 
			
		return num; 
	}


	function checkValues () {
		var boardValues = levelDifficulty (1, mat1);
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				boardValues[i][j] = cells[i][j].value;
			}
		}
		
		console.log (boardValues);
		alert (checkSudokuMatrix(boardValues));
	}

	
	function checkSudokuMatrix (mat) { 
		let checkMatrix1 = new Array (9), checkMatrix2 = new Array (9);
		if (mat.length != 9) return false;
		
		
		for (let i = 0; i < 9; i+=3) {
			for (let j = 0; j < 9; j+=3) {

				for  (let k = 0; k < 9; k++) {
					checkMatrix1[k] = false;
				}

				for (let i1 = i; i1 < i+3; i1++) {
					for (let j1 = j; j1 < j+3; j1++) {

					   if (checkMatrix1[mat[i1][j1] - 1]) return false;		   				   
					   checkMatrix1[mat[i1][j1] - 1] = true; 
					}
				}
				
			}
		}


		for (let i = 0; i < 9; i++) {
			 
			for  (let k = 0; k < 9; k++) {
				checkMatrix1[k] = false;
				checkMatrix2[k] = false;
			}
			
			for (let j = 0; j < 9; j++) {			
			   if (checkMatrix1[mat[i][j] - 1]) return false;		   
			   checkMatrix1[mat[i][j] - 1] = true;
			   
			   if (checkMatrix2[mat[j][i] - 1]) return false;		   
			   checkMatrix2[mat[j][i] - 1] = true;
			}
		
		}

		return true;
	
	}


	function showValues() {
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				cells[i][j].value = mat[i][j];
			}
		}

	}

	