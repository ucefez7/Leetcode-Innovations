/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let len=0, left=0;
    let check= new Set()

    for(var i=0; i<s.length; i++){
        while(check.has(s[i])){
            check.delete(s[left])
            left ++
        }
        check.add(s[i])
        len= Math.max(len, check.size)
    }
    return len
};