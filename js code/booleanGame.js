// Expected Output - false
// true || <fill_here> || false && <fill_here> 
// true || false || false && false
// true || true || false && true 
// Real output - true
console.log("Not Possible")

// Expected Output - true
// <fill_here> || true && false ||  <fill_here>
// true || true && false || true
// false || true && false || true
// Real Output - true
console.log(true || true && false || true)
console.log(false || true && false || true)

// Expected Output - false
// false || true || <fill_here> || <fill_here> && true
// false || true || false || false && true
// false || true || true || false && true
// Real output - true
console.log("Not Possible")

// Expected Output - true
// false && true || <fill_here> || <fill_here> && false
// false && true || true || true && false
// false && true || true || false && false
// Real output - true
console.log(false && true || true || true && false)
console.log(false && true || true || false && false)


// Expected Output - false
// false || <fill_here> || <fill_here> && true || false
// false || false || false && true || false
// Real output - false
console.log(false || false || false && true || false)


// Game of Booleans

// Part-1 (Result: false)
console.log(true && true && false && true)
console.log(true && false || true && false) 

// Part-2 (Result: false)
console.log(true && true && false && true)
console.log(true && false || true && false) 

// and so on. 

