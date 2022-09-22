function wordExtract(text) {
    return text.match(/\w+/g).join(", ").toUpperCase();
}

console.log(wordExtract('Hi, how are you?'));
console.log(wordExtract('hello'));