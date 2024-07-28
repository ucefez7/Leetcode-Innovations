/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let hash={}
    for(var n of nums){
        hash[n]= (hash[n] || 0) + 1
    }
    return nums.sort((a,b)=> hash[a]==hash[b]? b-a: hash[a]- hash[b])
};