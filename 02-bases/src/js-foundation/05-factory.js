// const { getId } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');

// const { getAge, getId } = require('../plugins')


const buildMakePerson = ({ getId, getAge }) => {
  
 return ({ name, birthdate }) => {

  return {
    id: getId(),
    name,
    birthdate,
    age: getAge(birthdate)
  }
 }
  
}

// const obj = { name: 'John', birthdate: '1998-04-15' };

// const john = buildPerson( obj );

// console.log(john);

module.exports = {
  buildMakePerson,
}