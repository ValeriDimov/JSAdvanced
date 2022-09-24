function rotateArray(strArr, numberRotations) {
    
  for (let i = 0; i < numberRotations; i++) {
    let element = strArr.pop();
    strArr.unshift(element);
  }

  console.log(strArr.join(" "));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);

console.log("-----------");

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);