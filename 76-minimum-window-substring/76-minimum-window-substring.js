/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let have = new Map(), need = new Map(), matched = 0, l=0, 
        resIndex =-1, length=Number.POSITIVE_INFINITY;
    for(let i=0; i<t.length; i++) {
        need.set(t[i], need.get(t[i]) ? need.get(t[i])+1: 1);
    }
    let req = need.size;
    for(let i=0; i<s.length; i++) {        
        have.set(s[i], have.get(s[i]) ? have.get(s[i]) + 1 : 1);
        if(need.has(s[i]) && need.get(s[i]) == have.get(s[i]))
            matched++;
        while(matched == req) {
            if((i-l+1) < length) {
                length = (i-l+1);
                resIndex = l;
            }
            if(have.has(s[l])) {
                    have.set(s[l], have.get(s[l])-1);
                if(need.has(s[l]) && need.get(s[l]) > have.get(s[l]))
                    matched--;
            }
            l++;
        }
    }
    return (resIndex != -1) ? s.substr(resIndex, length): "";
};