/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var TrieNode = function() {
    this.childs = new Map();
    this.endOfWord = false;
}
var Trie = function() {
    this.root = new TrieNode();
}
var generateTree = (words) => {
    let trie = new Trie();
    for(let i=0; i<words.length; i++) {
        let root = trie.root;
        let word = words[i];
        for(let j=0; j<word.length; j++) {
            if(!root.childs.has(word[j])) root.childs.set(word[j], new TrieNode());
            root = root.childs.get(word[j]);
        }
        root.endOfWord = true;
    }
    return trie.root;
}

var findWords = function(board, words) {
    let root = generateTree(words);
    let m = board.length;
    let n = board[0].length;
    let visit = new Array(m).fill(null).map(() => new Array(n).fill(0));
    let found = new Set();
    var searchBoard = (tree, i, j, word) => {
        if(!tree.childs.has(board[i][j])) return;
        let node = tree.childs.get(board[i][j]);
        word = word+board[i][j];
        if(node.endOfWord) found.add(word);
        visit[i][j] = 1;
        //right
        if(j+1<n && visit[i][j+1] != 1)
            searchBoard(node, i, j+1, word);
        //left
        if(j-1>=0 && visit[i][j-1] != 1)
            searchBoard(node, i, j-1, word);
        //up
        if(i-1>=0 && visit[i-1][j] != 1)
            searchBoard(node, i-1, j, word);
        //down
        if(i+1<m && visit[i+1][j] != 1)
            searchBoard(node, i+1, j, word);    
        visit[i][j] = 0;
    }
    for(let i=0; i<m; i++) {
        for(let j=0; j<n; j++) {
            searchBoard(root, i, j, "");
        }
    }
    return Array.from(found);
};