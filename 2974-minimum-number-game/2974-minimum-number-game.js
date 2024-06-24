/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
   let arr=nums.sort((a,b)=>b-a)
   let res=[]
   while(arr.length){
    let alice= arr.pop()
    let bob= arr.pop()
    res.push(bob)
    res.push(alice)
   }
   return res
};