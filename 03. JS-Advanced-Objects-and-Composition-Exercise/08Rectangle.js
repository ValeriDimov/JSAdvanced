function rectangle(width, height, color) {
    let firstLetter = color.slice(0, 1);
    let colorRest = color.slice(1);     
    
    let rect = {
        width: Number(width),
        height: Number(height),
        color: firstLetter.toUpperCase() + colorRest,
        calcArea() {
            return width * height;
        }
    };

    // console.log(rect.width);
    // console.log(rect.height);
    // console.log(rect.color);
    // console.log(rect.calcArea());

    return rect;
}

rectangle(4, 5, 'red');

