/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum=0, res=[];
    for(var i=0; i<nums.length; i++){
        sum+= nums[i]
        res.push(sum)
    }
    return res
};