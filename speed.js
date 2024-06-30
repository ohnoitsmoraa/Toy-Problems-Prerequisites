function speedDetector (speed){
const speedLimit = 70;
const demeritPoints = (( speed - speedLimit)/5);
if (speed <= 70){
    console.log ("Ok");
}else if (demeritPoints >= 12){
    console.log ("License suspended");
}else {
    console.log (`Points ${demeritPoints}`);
}
};
