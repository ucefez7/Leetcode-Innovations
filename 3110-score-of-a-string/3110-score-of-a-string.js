/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let= res=0;
    for(var i=0; i<s.length-1; i++){
        res+= Math.abs(s.charCodeAt(i) - s.charCodeAt(i+1))
    }
    return res;
};