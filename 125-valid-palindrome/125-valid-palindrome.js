/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let array = 'a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,0,1,2,3,4,5,6,7,8,9'.split(',');
    let set = new Set(array);
    let start = 0;
    let end = s.length-1;
    while(start<=end) {
        let startCharAscii = s[start].toLowerCase();
        let endCharAscii = s[end].toLowerCase();
        if(!set.has(startCharAscii)) {
            start++;
            continue;
        }
        if(!set.has(endCharAscii)) {
            end--;
            continue;
        }
        if(startCharAscii != endCharAscii)
            return false;
        start++;
        end--;
    }
    return true;
};