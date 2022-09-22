function prevDay(year, month, day) {
    let previousDate = new Date(year, month - 1, day);
    previousDate.setDate(day - 1);
   
    let myYear = previousDate.getFullYear();
    let myMonth = previousDate.getMonth() + 1;
    let myDay = previousDate.getDate();
    
console.log(`${myYear}-${myMonth}-${myDay}`);

}

prevDay(2016, 9, 30);
prevDay(2016, 10, 1);