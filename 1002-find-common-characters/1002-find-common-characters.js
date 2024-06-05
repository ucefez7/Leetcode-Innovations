/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res=[]
    for( var letter of words[0]){
        if(words.every((word)=>word.includes(letter))){
            res.push(letter)
            words= words.map((word)=>word.replace(letter,""))
        }
    }
    return res
};