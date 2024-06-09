function subarraysDivByK(nums: number[], k: number): number {
    let prefix=0, op=0, map={};
    for(var i=0; i<k; i++){
        map[i]=0
    }
    map[0]=1

    for(var n of nums){
        prefix= (prefix + n% k +k) % k
        op+= map[prefix]
        map[prefix]++
    }
    return op
};