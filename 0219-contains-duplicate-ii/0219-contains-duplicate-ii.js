/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let dup={}
    for(var i=0; i<nums.length; i++){
        if(i-dup[nums[i]]<=k){
            return true
        }else{
            dup[nums[i]]=i
        }
    }
    return false
};