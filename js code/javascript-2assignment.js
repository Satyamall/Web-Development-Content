// * Compound Interest

/*  Given the Principal Amount,
* Interest Percentage and
* Time Calculate the compound interest amount
* CI = P*(1 + R/100)**T - P
*/

// Principal amount of Rs. 20,000
var principalAmount = 20000;

// interest percentage of 12%
var interestpercentage = 12;

//four years
var time = 4;

// Compound interest
var compoundinterest = principalAmount * (1 + interestpercentage/100)**time - principalAmount;
console.log(compoundinterest)
// 20000 * (1 + 12/100)**4 - 20000
// 20000 * ( 1.12)**4 - 20000
// 20000 * 1.57 - 20000
// 31470.39 - 20000
// 11470.39


// * The Game of lies - ||

// true && !(false) && !(true) || true || false
// 1.true - correct
// 2.false
console.log(true && !(false) && !(true) || true || false)

// false && true || !(false) && (!true || !false)
// 1.true - correct
// 2.false
console.log(false && true || !(false) && (!true || !false))

// true && false && (!false || !false) && true 
// 1.true
// 2.false - correct
console.log(true && false && (!false || !false) && true )

//!(false && !false || (false && !true || !true))
// 1.true - correct
// 2.false
console.log(!(false && !false || (false && !true || !true)))
