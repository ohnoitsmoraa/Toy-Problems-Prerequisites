function speedDetector (speed){
if (speed < 0 || typeof speed !== "number"){
    console.log ("Invalid speed")
    return;
}

const speedLimit = 70;

const demeritPoints = (( speed - speedLimit)/5);


if (speed < 70){
    console.log (`Ok`);
}else if (demeritPoints >= 12){
    console.log (`License suspended`);
}else {
    console.log (`Points ${demeritPoints}`);
}
};
console.log(speedDetector(50)) 

// Example usage:
/* If you console.log() a speed like 120, it outputs the demeit points as 10*/
/* Also f you console.log() speed as a string e.g"Hello" it outputs, Invalid speed */

