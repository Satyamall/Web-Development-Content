var arr=["assignment", "problem", "media", "upload"];

var char = function(el){
    if(el[0]==='a' || el[el.length-1]==='a')
    {
       return el;
    }
}

var f_l_char = arr.filter(char);
console.log(f_l_char);


var ar=["apple", "windows", "ubuntu", "cola", "system"];
f_l_char=ar.filter(char);
console.log(f_l_char);