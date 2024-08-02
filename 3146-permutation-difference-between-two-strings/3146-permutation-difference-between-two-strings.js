/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let count=0
    for(var i=0; i<s.length; i++){
        for(var j=0; j<t.length; j++){
            if(s[i]==t[j]){
                count += Math.abs(i-j)
            }
        }
    }
    return count
};