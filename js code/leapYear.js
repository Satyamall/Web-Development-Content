// Leap years
// 4, 400
// Gregorian Calendar
// must be divisible by 4
// if divisible by 100, then not a leap year
// unless
// the year is divisible by 400

var year = 2021;

if(year % 4 === 0 && year % 100 !==0 || year % 400 === 0){
    console.log("The year is a leap year");
}
else{
    console.log("The year is not a leap year");
}
