/*Create a class called Person which accepts the name of a person as a string, and his/her age 
as a number.
The Person class should have a method called describe which returns a string with the 
following syntax: "name, age years old". So for example, if John is 19 years old then the 
function describe of his object will return "John, 19 years old"*/
class Person{
    constructor(name,age){
        this.name =name;
        this.age=age;
    }

    describe(){
        return this.name+" ,"+this.age+" years old";
    }
}

const output =  new Person("jom",23).describe();
console.log(output);

//call using new Person("jom",23).describe(); in console.