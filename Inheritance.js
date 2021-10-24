function Grandparent(lname, caste, profession){
    this.lname=lname;
    this.caste = caste;
    this.profession = profession;
 }

 Grandparent.prototype.greet = function(user){
    console.log(`Hey ${user}, I am granparent of ${this.lname}`);
}

 function Parent(lname, caste){
    Grandparent.call(this, lname, caste, "Business");
 }

 Parent.prototype= Object.create(Grandparent.prototype);

 var parent = new Parent("Mall","OBC");
 console.log(parent);

 function Son(lname, caste){
    Parent.call(this, lname, caste, "Business");
 }
 Parent.prototype.greet1 = function(user){
    console.log(`Hey ${user}, I am parent of ${this.lname}`);
}


 Son.prototype= Object.create(Parent.prototype);
 var son = new Son("Satya","OBC");
 console.log(son);
 son.greet("Albert");
 son.greet1("Nrupul");