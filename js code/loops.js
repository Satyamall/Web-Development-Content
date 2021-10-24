//* while loops

var i = 0

while(i < 100){
    console.log("Hello World!")
    i++
}

// for loop

for(var i = 0; i < 100; i++){
    console.log("Hello World!")
}

// break statement

var i = 1;

while(true){
    console.log("Hello World");
    i++;
}
var i = 1;

while(true){
    if(i==10){
        break;
    }
    console.log("Hello World");
    i++;
}

// continue statement

for(var i = 1; i<=5;i++){
    console.log(i);
}

for(var i = 1; i<=5;i++){
    if(i==3){
        continue;    
    }
    console.log(i);
}

var counter = 0;

for (var i = 50; i <= 100; i++) {
  if (i % 7 == 0) {
    counter++;
  }
}
console.log(counter);

// Nested loop

for(var i=1; i<=3 ; i++){
    for(var j=1; j<=3 ; j++){
        console.log(i,j)
    }
}
/* The output will be
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
*/

// pattern print

var n = 10;
for (var i = 1; i <= n; i++) {
  var result = "";
  for (j = 1; j <= i; j++) {
      result+= "* "
  }
  console.log(result);
}

// prime number chek

var isPrime = true;
for (var i = 2; i * i <= n; i++) {
  if (n % i == 0) {
    isPrime = false;
    break;
  }
}
if (isPrime) {
  console.log("Is Prime");
} else {
  console.log("Not a Prime");
}