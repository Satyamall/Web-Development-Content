var arr=[2,4,5,3,6,8];

var odd=function(el){
    return (arr.indexOf(el)%2!==0 && el%2!==0);
}

var odd_num=arr.filter(odd);
console.log(odd_num);