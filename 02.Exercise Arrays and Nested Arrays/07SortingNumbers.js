function sortingNumbers(numArray) {
    let outputArray = [];
    numArray.sort((a, b) => a - b);

    while (numArray.length !== 0) {
        let minNum = numArray.shift();
        let maxNum = numArray.pop();
        outputArray.push(minNum);
        outputArray.push(maxNum);
    }

    return outputArray;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
