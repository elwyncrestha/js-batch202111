// higher order function

const persons = [
  { id: 1, name: 'John Doe' },
  { id: 1, name: 'Jane Doe' },
  { id: 1, name: 'Jack Doe' },
  { id: 1, name: 'Marry Doe' },
  { id: 1, name: 'Ram Doe' },
];
console.log(persons);

// map
const personsWithAliveStatus = persons.map((p, i) => ({ ...p, isAlive: i % 2 == 0 }));
console.log('map: ', personsWithAliveStatus);

// filter
const alivePeoples = personsWithAliveStatus.filter((p) => p.isAlive);
console.log('filter: ', alivePeoples);

// reduce
console.log('reduce: ', [1, 2, 3, 4, 5].reduce((previous, current) => previous + current, 0));

// forEach
persons.forEach((person, i) => person.id = (i + 1))
console.log('forEach: ', persons);

// some
console.log('some: ', persons.some((p) => {
  console.log(p.name);
  return p.name.toLowerCase().includes('jack');
}));

// every
console.log('every: ', persons.every((p) => {
  console.log(p.name);
  return p.name.toLowerCase().includes('doe');
}));

// flat
console.log('flat: ', [[1, 2, 3], [4, 5, 6, [7, 8]]].flat(2));

// flatMap
persons.push(
  { id: 1, name: 'Sam Doe', cars: ['Toyota', 'Ferrari'] },
  { id: 1, name: 'Pretti Doe', cars: ['Chevrolet'] },
);
console.log(persons);
console.log('flatMap: ', persons.flatMap((p) => p.cars));

// find
console.log('find: ', persons.find((p) => p.id === 1));

// sort
console.log([4, 19, 2, 3, 1, 9, -2].sort((a, b) => b - a));
