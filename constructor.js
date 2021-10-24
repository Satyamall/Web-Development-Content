function Person(name, age, profession){
    this.name=name;
    this.age = age;
    this.profession = profession;
    this.greet = function(user){
        console.log(`Hey ${user}, I am ${this.name}`);
    }
 }
 
 function Coder(name, age){
    // Person.apply(this, [name, age, "Coder"]);
    Person.call(this, name, age, "Coder");
    this.code= function(){
        console.log(`${this.name} is coding....`);
    }
 }

function Baker(name,age){
    Person.call(this, name, age, "Baker");
    this.bake=function(item){
        console.log(`${this.name} is baking ${item}`);
    }
} 

function soldier(name, age){
    var tmp= Person.bind(this, name, age, "Soldier");
    tmp();
    this.protect = function(){
        console.log(`${this.name} is protecting...`);
    }
}


 var c = new Coder("Satya",21);
 c.code();
 c.greet("Satya");

 var devid = new Baker("David", 23);
 devid.bake("Cake");
 devid.greet("Satya");

 var varun = new soldier("Varun", 25);
 varun.protect();
 varun.greet("Satya");