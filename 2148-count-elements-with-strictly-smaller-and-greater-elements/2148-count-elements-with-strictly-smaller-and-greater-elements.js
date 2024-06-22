/**
 * @param {number[]} nums
 * @return {number}
 */
var countElements = function(nums) {
    let max= Math.max(...nums)
    let min= Math.min(...nums)
    let check= nums.filter((num)=> num==max || num==min)
    return nums.length-check.length
};