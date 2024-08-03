/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let a= target.sort((a,b)=>a-b)
    let b= arr.sort((a,b)=>a-b)
    
    return a.join('') == b.join('')? true: false
};