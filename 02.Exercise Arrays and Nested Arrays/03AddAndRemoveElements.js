function addAndRemoveElements(commands) {
    let num = 1;
    let outputArr = [];

    for (let command of commands) {
        if (command === 'add') {
            outputArr.push(num);
        } else if(command === 'remove') {
            outputArr.pop();
        }

        num++;
    }

    console.log(outputArr.length === 0 ? "Empty" : outputArr.join("\n"));
}

addAndRemoveElements(['add', 
'add', 
'add', 
'add']
);

console.log("-----------");

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);

console.log("-----------");

addAndRemoveElements(['remove', 
'remove', 
'remove']
);

console.log("-----------");