function sameNumbers(input) {
    let inputToStr = input.toString();
    let firstSymbol = inputToStr[0];
    let isTheSame = true;
    let sum = 0;

    for (let i = 0; i < inputToStr.length; i++) {
        if(firstSymbol !== inputToStr[i]) {
            isTheSame = false;
        }

        sum += Number(inputToStr[i]);

    }
    console.log(isTheSame);
    console.log(sum);

}

sameNumbers(2222222);
sameNumbers(1234);