// Create a Newspaper factory publishing newspaper.
//each newspaper should have a timestamp , random id, day of news, name of publisher.

function NewsPaper(title,id){
   this.name=title;
   this.createAt = new Date().toString();
   this.day = new Date().getDay();
   this.month = new Date().getMonth();
   this.id= id;
}

var p = new NewsPaper("Time of India", "2021-09-07");
console.log(p);

/**
 * stack constructor
 */
function stack(){
    this.value = [];
    this.stackPop=function(){
        // * return the pooped element
        if(this.value.length>0){
            return this.value.pop();
        }
        else{
            console.log("Stack is empty");
        }
    }
    this.stackPush = function(value){
        this.value.push(value);
    }
    this.peek = function(value){
        console.log(this.value[this.value.length-1]);
        return this.value[this.value.length-1];
    }
}

var stack = new stack();
stack.stackPush(5);
stack.peek();
stack.stackPop();

// *this 

var obj ={
    name: "Satya",
    getName: function getName(){
        console.log(this.name);
    },
    b(){
        console.log('function b');
    },
    greet(user){
       console.log("Hello",",",user,"my name is",person) 
    }
    
}

obj.getName();

var getName = obj.getName.bind(obj);
//or
var getName = obj.getName;
getName = getName.bind(obj);

//console.log(getName === obj.getName)
getName();

// * call, apply, bind
// * allow you to change the context of this
// * implicit, javascript was trying to figure out who 'this' should belong to
// * explicitly define who this is 
// * function, comes with a call, apply, bind method
// * bind => returns a function, with the new context
// * call => instead of returning a new context / reference
// * it will also accept arguments that need to be sent to the function


var person = {name: 'Jeff'};
var fn=obj.greet;
fn.call(person, "Satya");

fn.apply(person,["Satya"]);

// * Person Constructor

// * 
//* Boolean constructor
var bool = new Boolean("a");
console.log(bool.valueOf());

var str = "abcdef";
 
console.log(str.length);