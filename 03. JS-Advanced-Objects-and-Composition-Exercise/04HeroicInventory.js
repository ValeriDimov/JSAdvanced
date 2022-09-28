function heroicInventory(strArray) {
    let registry = []; 
    let heroFactory = {};

    for (const hero of strArray) {
        let [name, level, items] = hero.split(' / ');

        items = items ? items.split(', ') : [];
       
        heroFactory = {
            name,
            level: Number(level), 
            items
        };

        registry.push(heroFactory);
    }

    let jsonOutput = JSON.stringify(registry);

    console.log(jsonOutput);
    // return jsonOutput;
}

heroicInventory(
    [
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]
);

console.log("-----------");

heroicInventory(
    [
    'Jake / 1000 / '
    ]
);