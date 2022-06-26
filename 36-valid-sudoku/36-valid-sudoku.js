/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let array = Array.from(Array(9), () => new Set());
    let size = board.length;
    for(let i=0; i<size; i++) {
        let a=new Set(), b=new Set();
        for(let j=0; j<size; j++) {
            if(board[i][j] !=".") {
                //check row
                if(a.has(board[i][j]))
                    return false;
                a.add(board[i][j]);
                //check box
                let setIndex = Math.floor(i/3)*3 + Math.floor(j/3);
                if(array[setIndex].has(board[i][j]))
                    return false;
                array[setIndex].add(board[i][j]);
            }
            if(board[j][i] !=".") {
                //check column
                if(b.has(board[j][i]))
                    return false;
                b.add(board[j][i]);
            }
        }
    }
    return true;
};