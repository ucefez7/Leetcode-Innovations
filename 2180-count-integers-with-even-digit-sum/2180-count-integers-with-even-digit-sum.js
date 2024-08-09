/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let count=0;
    for(var i=1; i<=num; i++){
        if(i<10 && i%2==0){
            count++
        }else{
            let sum=0;
            let n= i.toString()
            for(var j=0; j<n.length; j++){
                sum+=parseInt(n[j])
            }
            if(sum%2==0){
                count++
            }
        }
    }
    return count
};