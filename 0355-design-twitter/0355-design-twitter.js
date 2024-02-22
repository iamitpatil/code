
var Twitter = function() {
    this.count = 0;  //time tracking
    this.followMap = new Map(); //userId -> set of followerIds
    this.tweetMap = new Map(); //userIds -> [count, tweetId]
    this.followList = [];
};


var heapify = (array, i) => {
    let rt = i, l=2*i+1, r = 2*i+2;
    if(l<array.length && array[rt][0]<array[l][0]) rt = l;
    if(r<array.length && array[rt][0]<array[r][0]) rt = r;
    if(rt!=i) {
        let temp = array[rt];
        array[rt] = array[i];
        array[i] = temp;
        return heapify(array, rt);
    }
    return array;
}

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    if(!this.tweetMap.has(userId)) this.tweetMap.set(userId, []);
    this.tweetMap.get(userId).push([this.count, tweetId]);
    this.count++;
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.followMap.has(userId))  {
        this.followMap.set(userId, this.followList.length);
        this.followList.push(new Set());
    }
    let followers = this.followList[this.followMap.get(userId)];
    let allTweets = [];
    for(let follower of followers) {
        if(this.tweetMap.has(follower)) allTweets.push(...this.tweetMap.get(follower));
    }
    if(this.tweetMap.has(userId)) allTweets.push(...this.tweetMap.get(userId));
    for(let i=Math.floor(allTweets.length/2)-1; i>=0; i--) allTweets = heapify(allTweets, i);
    let result = [];
    while(result.length!=10 && allTweets.length!=0) {
        result.push(allTweets[0][1]);
        if(allTweets.length > 1) {
            allTweets[0] = allTweets.pop();
            allTweets = heapify(allTweets, 0);
        } else {
            allTweets.pop();
        }
    }
    return result;
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if(!this.followMap.has(followerId)) {
        this.followList.push(new Set());
        this.followMap.set(followerId, this.followList.length-1);
    } 
    this.followList[this.followMap.get(followerId)].add(followeeId);
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if(this.followMap.has(followerId)) this.followList[this.followMap.get(followerId)].delete(followeeId);
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */