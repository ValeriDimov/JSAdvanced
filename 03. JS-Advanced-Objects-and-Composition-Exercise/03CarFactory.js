function carFactory(orderObj) {
    let car = {};
    car.model = orderObj.model;

    let engineEnum = {
        "Small engine": { power: 90, volume: 1800 },
        "Normal engine": { power: 120, volume: 2400 },
        "Monster engine": { power: 200, volume: 3500 }
    };

    if(orderObj.power <= 90) {
        car.engine = engineEnum["Small engine"];
    } else if(orderObj.power <= 120) {
        car.engine = engineEnum["Normal engine"];
    } else {
        car.engine = engineEnum["Monster engine"];
    }

    let carriageEnum = {
        Hatchback: { type: 'hatchback', color: orderObj.color },
        Coupe: { type: 'coupe', color: orderObj.color }
    };

    if(orderObj.carriage === 'hatchback') {
        car.carriage = carriageEnum["Hatchback"];
    } else {
        car.carriage = carriageEnum["Coupe"];
    }

    let size = orderObj.wheelsize;
    if(size % 2 !== 0) {
        car.wheels = [size, size, size, size];
    } else {
        car.wheels = [size - 1, size - 1, size - 1, size - 1];
    }

    return car;
}

console.log(carFactory(
    { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }  
));

console.log("---------");
console.log(carFactory(
    { model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }  
    ));
