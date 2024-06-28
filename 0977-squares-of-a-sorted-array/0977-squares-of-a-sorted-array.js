/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let arr= nums.map((x)=>(x*x))
    return arr.sort((a,b)=>a-b)
};