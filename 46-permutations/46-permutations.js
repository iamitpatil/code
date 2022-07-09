/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result = [], a = [], visit=new Array(nums.length).fill(0);
    let generate = (p) => {
        if(p==nums.length) {
            result.push([...a]);
            return;
        }
        for(let i=0; i<nums.length; i++) {
            if(visit[i]!=1)  {
                a.push(nums[i]);
                visit[i] = 1;
                generate(p+1);
                visit[i] = 0;
                a.pop();
            }
        }
    }
    generate(0);
    return result;
};