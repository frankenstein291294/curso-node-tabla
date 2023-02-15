// const {argv, options} = require('yargs');
const { makeFile2, makeFileOption1 } = require('./helpers/multiplicar')
const argv =  require ('./config/yargs');


console.clear();

makeFile2(argv.b, argv.l, argv.h)
  .then(result => console.log(result))
  .catch(err => console.log(err));






// const table = 5;


// console.log(process.argv);
/* const [,, arg3 = 'base=5'] = process.argv; */
/* const [ ,  base ] = arg3.split('='); */
// console.log(arg3);
// console.log(base);


/* makeFile2( base ) */
  /* .then(result => console.log(result)) */
  /* .catch(err => console.log(err)); */

// Para poder crear documento con node, podemos usar la funcion habitual 
// Pero debemos de requerir la libreria 'rs' en la parte superior
/* fs.writeFile(`table-${table}.txt`, salida, (err) => { */
  /* if (err) throw err; */
  /* console.log(`file table-${table}.txt created`); */
/* }) */

// Tambien podemos usar la funcion writeFileSync esta funcion es mucho mas rapida por que es asincrona
