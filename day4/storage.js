// Local Storage

const log = console.log;

const person = { name: 'John', age: 20 };
localStorage.setItem('person', JSON.stringify(person));

const personFromLocalStorage = JSON.parse(localStorage.getItem('person'));
log(personFromLocalStorage);

// Session Storage

const person1 = { name: 'John', age: 20 };
sessionStorage.setItem('person', JSON.stringify(person1));

const personFromSessionStorage = JSON.parse(sessionStorage.getItem('person'));
log(personFromSessionStorage);
