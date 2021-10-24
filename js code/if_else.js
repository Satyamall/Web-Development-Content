// * conditions
// * true or false

// * if statement
var slots = 0;
var areSlotsAvailable = slots > 0;

if (areSlotsAvailable)
{
    // * true
    console.log("slots are available");
}
else{
    // * false
    console.log("slots are not available");
}

var age = 16;
// * there are two lines
// * children - lane 1 - <18
// * adults - lane 2 - 18 - 45
// * elderly adults - lane 3 - 45+

if (age < 18){
    console.log("move to the lane 1");
}
else if(age <= 45){
    console.log("move to the lane 2");
}
else if(age > 45){
    console.log("move to lane 3");
}

if (-100){
    console.log(true)
}
else{
    console.log(false)
}

// * Nested if statements
// Nest

// * years
// * check if a year is odd or even
// * if the year is even
    // * print even
    // * if the year is divisible by 2 , print divisible by 2
// * if the year is odd
    // * print odd
    // * if the year is divisible by 3 , print divisible by 3

var year = 1800;

if(year % 2 === 0){
    console.log("even");
    if(year % 10 === 0)
    {
        console.log("divisible by 10");
    }
}
else{
    console.log("odd");
    if(year % 10 !== 0)
    {
        console.log("not divisible by 10");
    }
}

// * Switch case

var day = "Monday";
switch(day){
    case "Monday":
        console.log("This is the first day of the week");
        break;
    case "Tuesday":
        console.log("This is the first day of the week");
        break;
    case "Wednesday":
        console.log("This is the first day of the week");
        break;
    case "Thursday":
        console.log("This is the first day of the week");
        break;
    case "Friday":
        console.log("This is the first day of the week");
        break;
    case "Saturday":
        console.log("This is the first day of the week");
        break;
    case "Sunday":
        console.log("This is the first day of the week");
        break;
    default:
        console.log("please check your input");
        
}

