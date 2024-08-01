/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let res=''
    for(var i=0; i<s.length; i++){
        res+= s[(k+i)% s.length]
    }
    return res
};