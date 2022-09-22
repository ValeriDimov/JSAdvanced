function cookingNumbers(num, ...cookingCommands) {
let numberForCook = Number(num);
let commands = [...cookingCommands];

    for (const command of commands) {
        switch(command) {
            case 'chop':
                numberForCook /= 2;
            break;
            case 'dice':
                numberForCook = Math.sqrt(numberForCook);
            break;
            case 'spice':
                numberForCook += 1;
            break;

            case 'bake':
                numberForCook *= 3;
            break;
            case 'fillet':
                numberForCook *= 0.8;
            break;
        }
        console.log(numberForCook);
    }

}

// cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');