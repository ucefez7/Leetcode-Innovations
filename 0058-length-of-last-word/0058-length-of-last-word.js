/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a= s.trim().split(' ')
    let res=a[a.length-1]
    return res.length

};