class Parent{
    constructor(){
        this.fatherName= "Alice Richard";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
        
    }
    getFullName(){
        return this.name + " " + this.fatherName;    
}
}
const baby = new Child("Ronaldo");
const baby2 = new Child("Arnold");
console.log(baby);
console.log(baby2.getFullName());