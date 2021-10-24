
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
console.log(arr);