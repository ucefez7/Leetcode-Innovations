/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b)
    s.sort((a,b)=>a-b)
    let res=0, i=0;
    for(var num of s){
        if(num>= g[i]){
            res++
            i++
        }
    }
    return res
};