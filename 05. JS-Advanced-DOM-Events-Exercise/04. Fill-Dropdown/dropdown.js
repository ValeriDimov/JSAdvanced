function addItem() {
    let inputText = document.querySelectorAll('input[type = "text"]')[0].value;
    let inputValue = document.querySelectorAll('input[type = "text"]')[1].value;

    let btnAdd = document.querySelector('input[type = "button"]');
    let dropDown = document.getElementById("menu");
    let option = document.createElement("option");
    option.text = inputText;
    option.value = inputValue;

    dropDown.appendChild(option);

    document.querySelectorAll('input[type = "text"]')[0].value = "";
    document.querySelectorAll('input[type = "text"]')[1].value = "";

}