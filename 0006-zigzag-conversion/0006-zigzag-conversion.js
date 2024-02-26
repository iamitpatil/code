/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let ind = 0, res = new Array(numRows).fill(""), down = 1;
    for(let i=0; i<s.length; i++) {
        res[ind] = res[ind] + s[i];
        if(down) {
            if(ind < numRows-1) {
                ind++;
            } else {
                down = 0;
                if(ind-1 >= 0) {
                    ind--;
                }
            }
        } 
        else {
            if(ind > 0) {
                ind--;
            } else {
                down = 1;
                if(ind+1 <= numRows-1) {
                    ind++;
                }
            }
        }
    }
    return res.join("");
};
// 14/4 = 