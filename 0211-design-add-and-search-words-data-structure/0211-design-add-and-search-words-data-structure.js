
var TrieNode = function() {
    this.childs = new Map();
    this.endOfWord = false;
}

var WordDictionary = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let root = this.root;
    for(let i=0; i<word.length; i++) {
        if(!root.childs.has(word[i])) root.childs.set(word[i], new TrieNode());
        root = root.childs.get(word[i]);
    }
    root.endOfWord = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    let head = this.root;
    let searchTree = (root, i) => {
        if(word[i] == ".") {
            for(let [key, value] of root.childs) {
                if(i == word.length-1 && value.endOfWord) return value.endOfWord;
                if(searchTree(value, i+1)) return true;
            }
        } 
        else {
            if(!root.childs.has(word[i])) return false;
            if(i == word.length-1) return root.childs.get(word[i]).endOfWord;
            return searchTree(root.childs.get(word[i]), i+1);
        }
        return false;
    }
    return searchTree(head, 0);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */