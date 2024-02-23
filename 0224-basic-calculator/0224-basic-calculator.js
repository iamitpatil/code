/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
    let stack = [1], result = 0, sign = 1, num = 0;
    for(let i=0; i< s.length; i++) {
        if(s[i] >= '0' && s[i] <= '9') {
           num = (num*10) + Number(s[i]);
        } else if(s[i] ==='(') {
           stack.push(sign);
        } else if(s[i] === ')') {
            stack.pop();
        } else if(s[i] === '+' || s[i] === '-') {
            result = result + num*sign;
            sign = (s[i] === '+' ? 1: -1)*stack.at(-1);
            num = 0;
        }
    }
    
    return result + sign*num;
};


// open = 1
// stack = ['(', '1', '+', '-', 'calcu(4+5+2)', - , 3, ]

//
// stack = [-]

// "(1+(4+5+2)-3)+(6+8)"
//         root
//        /
//         +      
//.     /    \ 
//     +       +
//    / \     / \
//   1        6.  8
//      
//    