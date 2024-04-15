/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums = nums.filter(i => i !== 0).sort((a,b) => a-b);
    let res = 0;
    for(let k=nums.length-1; k>=0; k--) {
        if(k<2){
            continue;
        }
        let i=0, j=k-1;
        while(j>i) {
            if(nums[i]+nums[j] <= nums[k]) {
                i++;
            } else {
                res = res + ((j > i) ? j-i: 0);
                j--;
            }
        }
    }
    return res;
};

// a,b,c
// c is mx 
// a + b > c
// a,b,c > 0

//brute 
// n^3
// 
// n^2*log(n)
//
//   i=1  j=4  
//[2,3,4,5,6,7,8]
//i=0  j = 5. = 5
//4*(4-1)/2
//
// for c = nums[i]:
//    (num, freq)
//    3

//sort array
//map<int, int> {number}