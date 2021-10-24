var arr=["A", "Good", "Problem"];

var isOdd_Len=function(el){
    return el.length % 2!==0;
}

var sum = function(ac,el){
    return ac+el.length;
}

var sum_odd_len=arr.filter(isOdd_Len).reduce(sum,0);
console.log(sum_odd_len);


var ar=["apple", "Windows", "Linux", "Kindle", "Quiz"];
sum_odd_len=ar.filter(isOdd_Len).reduce(sum,0);
console.log(sum_odd_len);