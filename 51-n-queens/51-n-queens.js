/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let board = new Array(n).fill(0).map(() => new Array(n).fill("."));
    let result = [];
    let generate = (i) => {
        if(i==n) {
            result.push([...board.map((row) => row.join(""))]);
            return;
        } 
        for(let k=0; k<n; k++) {
            for(let g=i; g>=0; g--) {
                if(
                    (k-i+g>=0 && board[g][k-i+g] == "Q") ||
                    (k+i-g<n && board[g][k+i-g] == "Q") ||
                    (board[g][k] == "Q")
                ) {
                    break;
                } else {
                    if(g==0) {
                        board[i][k] = "Q";
                        generate(i+1);
                        board[i][k] = ".";
                    }
                }
            }
        }
        return;
    }
    generate(0);
    return result;
};