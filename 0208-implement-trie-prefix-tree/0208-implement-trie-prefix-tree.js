
var TrieNode = function() {
    this.childs = new Map();
    this.endOfWord = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
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
Trie.prototype.search = function(word) {
    let root = this.root;
    for(let i=0; i<word.length; i++) {
        if(!root.childs.has(word[i])) return false;
        root = root.childs.get(word[i]);
    }
    return root.endOfWord;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let root = this.root;
    for(let i=0; i<prefix.length; i++) {
        if(!root.childs.has(prefix[i])) return false;
        root = root.childs.get(prefix[i]);
    }
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */