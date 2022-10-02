function solve() {
    let textInput = document.getElementById("input").value;
    let output = document.getElementById("output");
    let sentencesArr = textInput.split(".");
    let paragraphs = [];
    let currentParagraph = "";

    for (let i = 0; i < sentencesArr.length; i++) {
        let currentSentence = sentencesArr[i];

        if(i !== 0  && i % 3 === 0) {
          paragraphs.push(currentParagraph);
          currentParagraph = "";
      }
         
        if(currentSentence[currentSentence.length] !== "." && currentSentence.length !== 0) {
          currentParagraph += currentSentence + ". ";
        } else {
          currentParagraph += currentSentence + " ";

        }
        
        currentParagraph = currentParagraph.trim();
                
    }

    if(currentParagraph.length !== 0) {
        paragraphs.push(currentParagraph);  
    }

    for (const par of paragraphs) {
      output.innerHTML += `<p>${par}</p>\n`;
    }
}