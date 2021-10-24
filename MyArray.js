// * MyArray

function MyArray(){
    Object.defineProperty(this,"length",{
        value: 0,
        writable: true,
        enumerable: false,
    })
}

MyArray.prototype.push = function(value){
    this[this.length]=value;
    this.length++;
    return this.length;
}

MyArray.prototype.pop = function(){
    if(this.length===0)
    {
        return undefined;
    }
    var poppedElement = this[this.length-1];
    delete this[this.length-1]
    return poppedElement;
}


MyArray.prototype.map = function(callback){
    var result = new MyArray();
    for(var index in this){
        if(this.hasOwnProperty(index)){
            var returnElment = callback(this[index], Number(index),this);
            result.push(returnElment);
        }
    }
    return result;
}

var arr = new MyArray();
arr.push(5);
arr.push(10);

console.log(arr, arr.length);

let res=arr.map(function(el, index, arr){
    return el*el;
})

console.log('response is ',res);
console.log(arr.hasOwnProperty("length"));
console.log(arr.hasOwnProperty("push"));

var ar=[1,2,3]

var callback = function(el,index){
    return el*el;
}

console.log(ar.map(callback));
console.log(ar.pop());


// Create prototype in constructor function

function Person(name, age, profession){
    this.name=name;
    this.age = age;
    this.profession = profession;
 }

 Person.prototype.greet = function(user){
    console.log(`Hey ${user}, I am ${this.name}`);
}
 
 function Coder(name, age){
    Person.call(this, name, age, "Coder");
 }

 Coder.prototype= Object.create(Person.prototype);

 var coder = new Coder("Satya",21);
 console.log(coder);
 coder.greet("Albert");

 console.log(coder.__proto__===Coder.prototype);
 console.log(coder.__proto__.__proto__=== Person.prototype);

 var person = new Person("Satya", 24, "Programmer");

 person.greet("Albert");