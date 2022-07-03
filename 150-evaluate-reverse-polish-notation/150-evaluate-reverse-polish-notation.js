/**
 * @param {string[]} tokens
 * @return {number}
 */
var multiply = (val1,val2) => { return val1*val2;}
var divide = (val1,val2) => { return val1/val2;}
var subtract = (val1,val2) => { return val1-val2;}
var add = (val1,val2) => { return val1+val2;}
var roundOff = (val) => { return val < 0 ? Math.ceil(val): Math.floor(val); }
var evalRPN = function(tokens) {
    let stack=[];
    for(let i=0; i<tokens.length; i++) {
        if(isNaN(tokens[i])) {
            let no2 = stack.pop(), no1=stack.pop();
            if(tokens[i] == "*") {
                stack.push(multiply(no1, no2));
            } else if(tokens[i] == "/") {
                stack.push(roundOff(divide(no1, no2)));
            } else if(tokens[i] == "+") {
                stack.push(add(no1, no2));
            } else {
                stack.push(subtract(no1, no2));
            }
        } else {
            stack.push(parseInt(tokens[i]));
        }
    }
    return stack.pop();
};