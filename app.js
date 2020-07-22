const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Andy', 'Chris', 'Jacob', 'Arthur', 'Ben'];
const femaleNames = ['Kate', 'Anna', 'Victoria', 'Jessica', 'Angela'];
const lastNames = ['Brown', 'Smith', 'Williams', 'Jones', 'Miller'];

const randChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const people = [];

const selectPeople = () => {
    for (let i = 0; i < 20; i++) {
        const person = {}
        person.gender = randChoice(genders)
        person.firstName = person.gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames)
        person.lastName = randChoice(lastNames)
        person.age = Math.floor(Math.random()*61)+18

        people.push(person)
    }
};
selectPeople();

const peopleJSON = JSON.stringify(people)

fs.writeFile('people.json', peopleJSON, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});