// constructor function
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = dob;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

// ES6 class
// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//   this.lastName = lastName;
//   this.dob = dob;
//   }

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }


// use
const person = new Person('John', 'Doe', '1980/02/22');
console.log(person);
console.log(person.getFullName());