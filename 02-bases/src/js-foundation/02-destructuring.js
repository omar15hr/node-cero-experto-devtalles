

// console.log( process.env );

const { PROCESSOR_LEVEL, PROCESSOR_ARCHITECTURE } = process.env;

// console.table({ PROCESSOR_LEVEL,PROCESSOR_ARCHITECTURE });

const characters = ['Flash', 'Superman', 'Green Lantern', 'Batman'];

const [ _, __, , batman ] = characters;

// console.log(batman);