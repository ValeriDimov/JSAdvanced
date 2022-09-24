function extractNumbers(numArray) {
    let initial = numArray[0];
    let highestNum = initial;
    let outputArr = [];
    outputArr.push(initial);

    for (let i = 1; i < numArray.length; i++) {
        if(initial <= numArray[i]) {
            outputArr.push(numArray[i]);
            initial  = numArray[i];
            
        }        
    }
    return outputArr;
}

console.log(extractNumbers([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    ));

    
console.log(extractNumbers([]));

console.log(("------------"));
console.log(extractNumbers([1, 
    2, 
    3,
    4]
    ));
console.log(("-------------------"));
console.log(extractNumbers([20, 
    3, 
    2, 
    15,
    6, 
    1]
    ));