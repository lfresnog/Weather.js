import request from 'request';
import chalk from 'chalk';

const baseURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        const city = `Madrid.json?access_token=`;
        const token = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
        const config = '&language=es'
        const url = `${baseURL}${city}${token}${config}`;
        console.log(url);
        //if(!argv.index){
            request({ url: url, json: true }, (error, response) => {
                console.log("\n Las ciudades con ese nombre son:")
                response.body.features.forEach( (loc, i) => {
                    console.log(`   ${i}: ${loc.place_name}`);
                    console.log(chalk.yellow(`       x: ${loc.geometry.coordinates[0]}  y: ${loc.geometry.coordinates[1]}`));

                  })
              });

       // }