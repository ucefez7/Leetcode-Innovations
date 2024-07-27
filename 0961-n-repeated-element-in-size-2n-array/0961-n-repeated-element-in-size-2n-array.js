/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function(nums) {
   let a= nums.filter((item,index)=>nums.indexOf(item)!=index)
   return a[0]
};