/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    return nums.filter((item,index)=>nums.indexOf(item)!=index)
};