function roadRadar(speed, zone) {
    let speedLimit = 0;

    switch (zone) {
        case 'motorway':
            speedLimit = 130;
        break;
        case 'interstate':
            speedLimit = 90;
        break;
        case 'city':
            speedLimit = 50;
        break;
        case 'residential':
            speedLimit = 20;
        break;
    }

    let speedingKilometres = speed > speedLimit ? speed - speedLimit : 0;

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
    } else {
        let status = statusChange(speedingKilometres);
        console.log(`The speed is ${speedingKilometres} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }

    function statusChange(overKilometres) {
        if (overKilometres <= 20) {
            return 'speeding';
        } else if (overKilometres <= 40) {
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');