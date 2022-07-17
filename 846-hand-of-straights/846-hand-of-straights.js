/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var heapifyDown = (i, a) => {
    let l = 2*i+1, r= 2*i+2, rt=i;
    if(l<a.length && a[l]<a[rt]) rt=l;
    if(r<a.length && a[r]<a[rt]) rt=r;
    if(i!=rt) {
        a[rt] = a[rt]^a[i];
        a[i] = a[rt]^a[i];
        a[rt] = a[rt]^a[i];
        heapifyDown(rt, a);
    }
}

var isNStraightHand = function(hand, groupSize) {
    if(hand.length % groupSize != 0 || hand.length == 0) return false;
    let map = new Map();
    for(let i=0; i<hand.length; i++) {
        if(map.has(hand[i])) map.set(hand[i], map.get(hand[i])+1);
        else map.set(hand[i], 1);
    }
    let heap = Array.from(map.keys()), groups=0;
    for(let i=heap.length-1; i>=0; i--) heapifyDown(i, heap);
    while(heap.length > 0) {
        if(groups == Math.floor(hand.length/groupSize)) return true;
        let element = heap[0];
        if(!map.has(element) && heap.length>1) {
            heap[0] = heap.pop();
            heapifyDown(0, heap);
            continue;
        }
        while(heap[0]+groupSize > element) {
            if(!map.has(element)) return false;
            if(map.get(element)>1) map.set(element, map.get(element)-1);
            else map.delete(element);
            element++;
        }
        groups++;
    }
    return groups == Math.floor(hand.length/groupSize);
};