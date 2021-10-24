
function MyArray(){
    Object.defineProperty(this,"length",{
        value:0,
        writable: true,
        enumerable: false,
    })
}

var arr = new MyArray();
console.log(arr, arr.length);

