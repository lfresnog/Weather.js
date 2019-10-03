console.log("Exito");
import yargs from 'yargs';

yargs.command({
    command:'localization',
    describe:'Indicate the weather in a zone',
    builder:{
        name:{
            describe:'Name of the localization',
            demandOption:true,
            type:'string',
        },
        index: {
            describe: 'Posible places in that place',
            demandOption: true,
            type: 'number',
          },
    },
    handler: localization,
})