function solve() {
let textInput = (document.getElementById("text").value).split(" ");
let convention = document.getElementById("naming-convention").value;
let result = "";

for (let i = 0; i < textInput.length; i++) {
    let tempWord = textInput[i].toLowerCase();

    switch (convention) {
      case "Camel Case":
        if(i !== 0) {
          result += tempWord[0].toUpperCase();
          result += tempWord.substring(1);
        } else{
          result += tempWord;
        }
        break;

      case "Pascal Case":
        result += tempWord[0].toUpperCase();
        result += tempWord.substring(1);
          break;

      default:
        result = "Error!"
        break;
    }
}

document.getElementById("result").textContent = result;

}