const Dragon = require('./Dragon.js');

const fooey = new Dragon({
  birthdate: new Date(),
  nickname: 'fooey'
});
const baloo = new Dragon({
  birthdate: new Date(),
  nickname: 'baloo'
});

console.log('fooey', fooey);
console.log('baloo', baloo);
