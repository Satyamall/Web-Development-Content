var arr=[2,4,5,3,6,8];

var even=function(el){
    return (arr.indexOf(el)%2===0 && el%2===0);
}

var even_num_index=arr.filter(even);
console.log(even_num_index);