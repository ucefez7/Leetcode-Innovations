/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let rotations= time/ (n-1)
    let r= time% (n-1)
    if(rotations&1){
        return n-r
    }else{
        return r+1
    }
};