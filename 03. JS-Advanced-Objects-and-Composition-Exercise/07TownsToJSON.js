function townConventer(array) {
    let table = [];

    for (let i = 1; i < array.length; i++) {
        let townDetails = array[i];
        let elements = townDetails.split("|");
        let Town = elements[1].trim();
        let Latitude = Number(Number(elements[2].trim()).toFixed(2));
        let Longitude = Number(Number(elements[3].trim()).toFixed(2));        

        let townTable = {
            Town,
            Latitude,
            Longitude
        }

        table.push(townTable);
    }

    return outputJson = JSON.stringify(table);

}

townConventer(
    ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);

console.log("-----------");

townConventer(
    ['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);