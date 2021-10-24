// function __init(){
//     var a=100;

//     function getA(){
//         return a
//     }

//     return {getA}
// }

// const init = __init()

// const init = (function(){
//     var a=100;

//     function getA(){
//         return a
//     }

//     return {getA}
// })

// dayjs

//IIFE
//Immediately invoked function expression

// CODE SPLITING


function sum(a,b){
    return a+b;
}

// export function prod(a,b){
//     return a*b
// }
// console.log(prod(10,2))

function prod(a,b){
    return a*b
}
console.log(prod(10,2))

// console.log(sum(10,2))

// const Math={
//     sum,
//     prod
// }

export {
    sum,
    prod
}

// export default Math;

// export default sum;
//* only one export default