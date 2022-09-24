function printElementFromArray(strArr, step) {
    let outputArr = [];

    for (let i = 0; i < strArr.length; i += step) {
        outputArr.push(strArr[i]);        
    }

    return outputArr;

}

console.log(printElementFromArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
));

console.log("-----------------");

console.log(printElementFromArray(['dsa',
'asd', 
'test', 
'tset'], 
2
));

console.log("-----------------");

console.log(printElementFromArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
));

