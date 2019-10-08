import yargs from 'yargs';
import {localization} from './utils';

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
            demandOption: false,
            type: 'number',
          },
    },
    handler: localization,
})

yargs.parse();      