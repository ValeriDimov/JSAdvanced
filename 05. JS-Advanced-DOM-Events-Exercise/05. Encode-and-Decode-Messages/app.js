function encodeAndDecodeMessages() {
    let messageInput = document.querySelectorAll("#main textarea")[0];
    let outputMessage = document.querySelectorAll("#main textarea")[1];
    let outputResult = "";
    let finalResult = "";


    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName("button")[1];

    encodeBtn.addEventListener('click', function() {
        
        let currText = messageInput.value
        for (let i = 0; i < currText.length; i++) {

            let currAsci = currText[i].charCodeAt(0) + 1;
            let encriptedLetter = String.fromCharCode(currAsci);
            outputResult += encriptedLetter;    
        }
        messageInput.value = "";

        outputMessage.value = outputResult;
    });

    decodeBtn.addEventListener('click', function() {
        
        let currText = outputResult;
        for (let i = 0; i < currText.length; i++) {

            let currAsci = currText[i].charCodeAt(0) - 1;
            let decriptedLetter = String.fromCharCode(currAsci);
            finalResult += decriptedLetter;    
        }
        outputMessage.value = finalResult;
    });

}