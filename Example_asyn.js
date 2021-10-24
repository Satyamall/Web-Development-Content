
// const total = 100000;

// const start=Date.now();
// console.log("starting");
// for (let i = 0; i < total; i++) {
//     // console.log(i);
// }

// console.log("ended");
// console.log(Date.now()-start);

// const callback = function(){
//     console.log("callback has been called");
// }

// console.log("start");
// setTimeout(callback,3000);
// console.log("end");

const callback = function(number){
    console.log("callback has been called" + number);
}

console.log("start");
const id=setTimeout(function(){
    callback(1);
},1000);

const id2=setTimeout(function(){
    callback(2);
},500);

clearTimeout(id2);
console.log("end");

// *Set Interval

// var count = 0;
// const id = setInterval(function(){
//     console.log(count)
//     count++;
//     if(count > 10){
//         clearInterval(id);
//     }
// },1000)

// console.log("id", typeof id, id);

// * set timeout

// console.log("started");
// const start = Date.now();
// setTimeout(function(){
//      console.log("ended");
//      console.log(Date.now()-start);
// }, 3000)

// const delay = 5000;

//  // unless function to emulate delay
// while(Date.now()-start < delay){
//     //delay the program
// }
// console.log(Date.now()-start)

// function printNumber(number)
// {
//     console.log("number",number);
// }
// printNumber(1);

// printNumber(2);

// setTimeout(function(){
//     printNumber(3);
// }, 0);

// printNumber(4);

// function printNumber(number)
// {
//     console.log("number",number);
// }
// printNumber(1);

// printNumber(2);

// let count = 3;
// const id = setInterval(function(){
//     printNumber(count++);
//     if(count > 9){
//         clearInterval(id);
//     }
// }, 1000);

// const delay = 5000;
// const start = Date.now();

// while(Date.now()-start < delay){
//          //delay the program
// }
