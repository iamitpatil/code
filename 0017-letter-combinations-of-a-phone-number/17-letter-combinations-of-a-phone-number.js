/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let result = [], s=[];
    let map = new Map(Object.entries({2: "abc", 3: "def", 4:"ghi", 5:"jkl", 
                                      6: "mno", 7: "pqrs", 8: "tuv", 9:"wxyz"}));
    let generate = (i) => {
        if(i>=digits.length) {
            result.push(s.join(""));
            return;
        }
        for(let k=0; k<map.get(digits[i]).length; k++) {
            s.push(map.get(digits[i])[k]);
            generate(i+1);
            s.pop();
        }
        return;
    }
    if(digits.length) generate(0);
    return result;
};