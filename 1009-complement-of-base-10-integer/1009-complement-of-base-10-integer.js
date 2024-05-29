/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let a=n.toString(2)
    let b=''
    for(var i=0; i<a.length; i++){
        if(a[i]=='1'){
            b+='0'
        }else if(a[i]=='0'){
            b+='1'
        }
    }
    return parseInt(b,2)
};