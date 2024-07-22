/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let people= names.map((name,index)=>({
        name:name,
        height:heights[index]
    }))
    people.sort((a,b)=>b.height-a.height)
    return people.map((x)=>x.name)
};