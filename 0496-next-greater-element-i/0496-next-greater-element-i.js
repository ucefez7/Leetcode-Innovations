/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let hashtable={}
    let stack=[]
    nums2.forEach((n)=>{
        while(stack.length>0 && stack[stack.length-1]<n){
            hashtable[stack.pop()]=n
        }
        stack.push(n)
    })
    return nums1.map((n)=> hashtable[n] || -1)
};