/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var heapify = (nums, i) => {
    let rt=i, l=2*i+1, r = 2*i+2;
    if(nums.length>l && nums[l]>nums[rt]) rt=l;
    if(nums.length>l && nums[r]>nums[rt]) rt=r;
    if(rt!=i) {
        nums[rt] = nums[i]^nums[rt];
        nums[i] = nums[i]^nums[rt];
        nums[rt] = nums[i]^nums[rt];
        return heapify(nums, rt);
    }
    return nums;
}

var heapifyUp = (nums, i) => {
    let rt = i, pt = Math.floor((i-1)/2);
    if(pt>=0 && nums[pt]<nums[rt]) {
        nums[pt] = nums[pt]^nums[rt];
        nums[rt] = nums[pt]^nums[rt];
        nums[pt] = nums[pt]^nums[rt];
        return heapifyUp(nums, pt);
    }
    return nums;
};

var leastInterval = function(tasks, n) {
    let chars = new Array(26).fill(0);
    let queue = [];
    for(let i=0; i<tasks.length; i++) {
        chars[tasks[i].charCodeAt(0)-"A".charCodeAt(0)]++;
    }
    chars = chars.filter((i)=> i != 0 );
    for(let i=Math.floor(chars.length/2)-1; i>=0; i--) chars=heapify(chars,i);
    let time=0;
    console.log(chars);
    while(queue.length || chars.length) {
        time++;
        if(chars.length) {
            let tp = chars[0]-1;
            if(chars.length>1) {
                chars[0] = chars.pop();
                chars = heapify(chars, 0);
            } else {
                chars.pop();
            }
            if(tp>0) queue.push([tp, time+n]);
        }
        if(queue.length && queue[0][1] == time) {
            let top = queue.shift();
            chars.push(top[0]);
            chars = heapifyUp(chars, chars.length-1);
        }
    }
    return time;
};
