
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { getUserById } = require('./js-foundation/05-factory');
// const { getPokemonById } = require('./js-foundation/06-promises');
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola mundo');


// getPokemonById(3)
//   .then((pokemon) => console.log({pokemon}))
//   .catch( (err) => console.log('Por favor intente de nuevo'))
//   .finally(() => console.log('Finally'))






















// const { getAge, getId } = require('./plugins')


// const { buildMakePerson } = require('./js-foundation/05-factory');

// // console.log(emailTemplate); 

// const makePerson = buildMakePerson({ getId, getAge });

// const obj = { name: 'John', birthdate: '1998-04-15' };

// const john = makePerson( obj );
