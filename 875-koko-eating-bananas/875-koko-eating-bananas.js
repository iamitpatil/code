/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let kr = 0, kl = 1, k=Number.POSITIVE_INFINITY;
    piles.forEach((len) => (kr = Math.max(kr, len)) && (kl = Math.min(kl, len)));
    let isPossible = (k) => {
        return h >= piles.map((item) => Math.ceil(item/k)).reduce((sum, a) => sum+a, 0);
    }
    while(kr>=kl) {
        mid = kl + Math.floor((kr-kl)/2);
        if(isPossible(mid)) {
            k=mid;
            kr = mid-1;
        } else {
            kl = mid+1;
        }
    }
    return k;
};