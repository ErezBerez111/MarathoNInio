let raceNumber = Math.floor(Math.random() * 1000);
var early = true;
var runnerAge = 19;

var result;

if (runnerAge > 18 && early) {
    raceNumber += 1000
    result = `Hello, your race number is ${raceNumber}, and your marathon starts at 9:30`;
}
else if (runnerAge > 18 && late) {
    result = `Hello, your race number is ${raceNumber}, and your marathon starts at 11:00`;
}
else {
    result = `Hello your race number is ${raceNumber}, and your marathon starts at 12:30`;
}

console.log(result);
