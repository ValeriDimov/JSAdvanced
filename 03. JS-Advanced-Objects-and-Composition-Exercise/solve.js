function solve() {
    let lett = [];
    let asss = [];
    let ex = {
        name: "Az",
        test: 13
    };

    let y = {
        a: {
            name: "Ti",
            test: 14
        }
        
    };

    lett.push('a');
    lett.push('b');

    asss.push(ex);
    asss.push(y);

    lett[0] = y;
   

    console.log(lett);

}

solve();