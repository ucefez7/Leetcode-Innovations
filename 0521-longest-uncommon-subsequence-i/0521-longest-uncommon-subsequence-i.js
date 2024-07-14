/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a==b) return -1
    let c= a.length, d= b.length;
    return c>d? c:d
};