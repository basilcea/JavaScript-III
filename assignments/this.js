/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding: When using this without the dot , it refers to the global window and returns the global object or undefined when using strict mode 
* 2. Implicit binding: 'this' is used in the context to refer to the object having the  properties. it uses dot notation i.e this.name where this refers to the object. 
* 3. New binding: 'this' is used in the function constructor and the new keyword is used to create a special instance of the constructor and this refers to that instance of the constructor
* 4. Explicit binding: 'using .call , .apply on an instance of a constructor along with a method to overwrite the default properties.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayMe(value){
console.log(this)
return value
}
sayMe([1,2,4])
// this returns 10 which isthe variable declared global or in the window

// Principle 2
const newObject ={
    name : 'basil',
    greet(){
        console.log(`Hello my name is ${this.name}`)
    }
}
newObject.greet() // returnns 'Hello my name is basil'


// code example for Implicit Binding

// Principle 3
function newConstructor (name , age){
    this.name = name;
    this.age = age;
    this.introduce =function() {
        console.log(`Hello , my name is ${this.name}. I am ${this.age} years old`)
    }
}
const newInstance = new newConstructor('Basil', 90)
const anotherInstance = new  newConstructor('Cea',40)

newInstance.introduce()
// code example for New Binding

// Principle 4
const explicit = newInstance.introduce

explicit.apply(anotherInstance)
// code example for Explicit Binding