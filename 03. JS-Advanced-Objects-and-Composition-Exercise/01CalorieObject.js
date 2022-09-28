function composeObject(arr) {
    let resultObject = {};
    
    for (let i = 0; i < arr.length; i++) {
        if(i % 2 === 0) {
            resultObject[arr[i]] = Number(arr[i + 1]);
        }       
    }
    console.log(resultObject);
}

composeObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
console.log("---------");
composeObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);