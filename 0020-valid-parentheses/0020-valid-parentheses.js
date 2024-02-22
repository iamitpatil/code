/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let array = [];
    for(let i=0; i<s.length; i++) {
        console.log("helo")
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            array.push(s[i]);
        } else if(s[i] === ')' || s[i] === '}' || s[i] === ']') {
            if(array.length) {
                if(
                    (array[array.length-1] === '(' && s[i] === ')') ||
                    (array[array.length-1] === '{' && s[i] === '}') ||
                    (array[array.length-1] === '[' && s[i] === ']')
                ) {
                    array.pop();
                } else {
                    return false;
                }
            } else {
                return false;
            }
        }
    }
    return array.length === 0;
};