const fs = require('fs');
let colors =  require('colors');


/* const makeFile = ( table = 5, output ) => { */
  /* console.clear(); */
  /* console.log('===================='); */
  /* console.log(`    Tabla del: ${table}    `); */
  /* console.log('===================='); */
  /*  */
  /* let salida = ''; */
  /*  */
  /* for (let i=1; i<=10; i++) { */
  /*   salida += `${ table } x ${ i } = ${ table * i }\n`; */
  /* } */
  /*  */
  /* console.log(salida); */
  /* fs.writeFileSync(`table-${table}.txt`, salida); */
  /* console.log(`file table-${table}.txt created`); */
/* } */


// option  1
const makeFileOption1 = (table = 5) => {
  return new Promise( ( resolve, reject ) => {
    console.clear();
/*     console.log('===================='); */
    /* console.log(`    Tabla del: ${table}    `); */
    /* console.log('====================');    */

    let salida = '';
    for (let i=1; i<=10; i++) {
      salida += `${ table } x ${ i } = ${ table * i }\n`;
    }

    console.log('promise');
    fs.writeFileSync(`table-${table}.txt`, salida);
    resolve(`table-${table}.txt -> created`);
  })
}


/**
 * Estamos usando esta funcion asincrona
 **/
const makeFile2 = async ( table = 5 , listar = false, hasta = 10) => {
/*   console.log(`table: ${table}, listar: ${listar}, hasta: ${hasta}`); */
  /* return; */
  try {
   
    let salida = '';
    let consola = '';

    for (let i=1; i<=hasta; i++) {
      salida += `${ table } x ${ i } = ${ table * i }\n`;
      consola += `${ table } ${'x'.green} ${ i } = ${ table * i }\n`;
    }

    if (listar) {
      console.clear();
      console.log('===================='.cyan);
      console.log(`    Tabla del: ${colors.blue(table)}    `);
      console.log('===================='.cyan);
      console.log(salida);
    }


    fs.writeFileSync(`./salida/table-${table}.txt`, salida);
    return `table-${table}.txt created`.rainbow;

  } catch (error) {
    throw error;
  }
}



module.exports = {
  makeFile2,
  makeFileOption1
}
