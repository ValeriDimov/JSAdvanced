function sortByTwoCriteria(strArray) {
    return strArray
    .sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    })
    .join("\n");
    
}

console.log(sortByTwoCriteria(['alpha', 
'beta', 
'gamma']
));

console.log("-------------------");

console.log(sortByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
));

console.log("-------------------");

console.log(sortByTwoCriteria(['test', 
'Deny', 
'omen', 
'Default']
));