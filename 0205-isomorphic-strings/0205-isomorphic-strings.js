/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let S={}, T={};

    for(var i=0; i<s.length; i++){
        if(S[s[i]] && S[s[i]] != t[i]){
            return false
        }
        S[s[i]]= t[i]
        if(T[t[i]] && T[t[i]] != s[i]){
            return false
        }
        T[t[i]]= s[i]
    }
    return true
};