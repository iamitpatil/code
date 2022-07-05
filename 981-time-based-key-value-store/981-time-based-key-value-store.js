
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key, []);
    this.map.get(key).push([value, timestamp]);
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    let res = "";
    let values = this.map.get(key) || [], r = values.length-1, l = 0, mid;
    while(r>=l) {
        mid = l + Math.floor((r-l)/2);
        if(values[mid][1] <= timestamp) res = values[mid][0];
        if(values[mid][1] <= timestamp) l = mid + 1; else r = mid - 1;
    }
    return res;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */