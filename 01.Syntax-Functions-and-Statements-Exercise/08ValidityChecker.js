function validityChecker(x1, y1, x2, y2) {

    if(x1 === 0 || y1 === 0) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }

    if(x2 === 0 || y2 === 0) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }

    let distance = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    if(distance >= 0) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)

    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)

    }

    // if((x1 >= x2 && y1 >= y2)) {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)

    // } else {
    //     console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)

    // }

}

validityChecker(3, 0, 0, 4);
validityChecker(2, 1, 1, 1);