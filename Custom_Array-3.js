
function MyArray(){
    Object.defineProperty(this,"length",{
        value:0,
        writable: true,
        enumerable: false,
    })
}

MyArray.prototype.push = function(value){
    this[this.length]=value;
    this.length++;
    return this.length;
}

var arr = new MyArray();
arr.push(5);
arr.push(10);
arr.push(100);

MyArray.prototype.reverse = function(){
    var res=[];
    for(var i=this.length-1; i>=0; i--)
    {
        res.push(this[i]);
    }
    return res;
}

var rev = arr.reverse();
console.log(rev);

MyArray.prototype.print = function(){
    var p=[];
    for(var i=0; i<this.length; i++)
    {
       p.push(this[i]);
    }
   return p;
}
var ans = arr.print();
console.log(ans); 

MyArray.prototype.foo = function(){
    return this[0];
}

var res=arr.foo()
console.log(res);