/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visit = new Array(board.length).fill(0).map(() => new Array(board[0].length).fill(0));
    let searchWord = (i, j, wi) => {
        if(wi>=word.length) return false;
        if(board[i][j] == word[wi]) {
            if(wi==word.length-1) return true;
            visit[i][j]=1;
            if(i-1 >= 0 && visit[i-1][j] == 0 && searchWord(i-1, j, wi+1)) return true;
            if(i+1 < board.length && visit[i+1][j] == 0 && searchWord(i+1, j, wi+1)) return true;
            if(j-1 >= 0 && visit[i][j-1] == 0 && searchWord(i, j-1, wi+1)) return true;
            if(j+1 < board[0].length && visit[i][j+1] == 0 && searchWord(i, j+1, wi+1)) return true;
            visit[i][j]=0;
        }
        return false;
    };
    for(let i=0; i<board.length; i++) {
        for(let j=0; j<board[0].length; j++) {
            if(searchWord(i,j,0)) return true;
        }
    }
    return false;
};