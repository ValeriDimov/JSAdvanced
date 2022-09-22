function walkCalc(steps, footprint, speed) {
    let distanceInKm = (steps * footprint) / 1000;
    let totalSec = (distanceInKm / speed) * 3600;

    let rest = Math.floor(distanceInKm / 0.5);
    let restsInSec = rest * 60; 

    totalSec += restsInSec;

    let totalHours = Math.floor(totalSec / 3600) < 10 ? `0${Math.floor(totalSec / 3600)}`: Math.floor(totalSec / 3600);
    let totalMinutes = Math.floor(totalSec / 60) < 10 ? `0${Math.floor(totalSec / 60)}`: Math.floor(totalSec / 60);
    
    let leftSec = (totalSec - (totalHours * 3600 + totalMinutes * 60)).toFixed(0);
    leftSec = leftSec < 10 ? `0${leftSec}` : leftSec;


    console.log(`${totalHours}:${totalMinutes}:${leftSec}`);
}

walkCalc(4000, 0.60, 5);
walkCalc(2564, 0.70, 5.5);