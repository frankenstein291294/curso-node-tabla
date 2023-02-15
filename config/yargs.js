 const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption:true,
    describe:'Is the table base'
  })
  .option('l', {
    alias:'Listar',
    demandOption:false,
    default: false,
    describe:'True to show list',
    type:'boolean'
  })
  .option('h', {
    alias:'hasta',
    demandOption:true,
    default: false,
    describe:'limit of table',
    type:'number'
  })
  .check( (argv, options) => {
    if ( isNaN(argv.b) ) {
      throw `La base debe  ser numero`;
    }
    if ( isNaN( argv.h ) ) {
      throw 'Hasta debe ser numero';
    }
    return true;
  })
  .argv;


module.exports = argv;
