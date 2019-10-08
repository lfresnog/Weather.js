import request from 'request';
import chalk from 'chalk';

const localization = function localization(argv){
    try{
        const mapBoxURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
        const city = `${argv.name}.json?access_token=`;
        const mapBoxtoken = 'pk.eyJ1IjoibGZyZXNub2ciLCJhIjoiY2sxYW8wc3o2MGczbTNpcjVoZ2sxbWRnZiJ9.Jdss3fcdT5Nypqn2KMQiFA';
        const config = '&language=es'
        const mapBoxurl = `${mapBoxURL}${city}${mapBoxtoken}${config}`;
        if (argv.index==null){
            request({ url: mapBoxurl, json: true }, (error, response) => {
                console.log("\n Las ciudades con ese nombre son:\n")
                response.body.features.forEach( (loc, i) => {
                    console.log(`   ${i}: ${loc.place_name}`);
                    console.log(chalk.yellow(`       x: ${loc.geometry.coordinates[0]}  y: ${loc.geometry.coordinates[1]}`));
                  })
              });

       }
       else{
        request({ url: mapBoxurl, json: true }, (error, response) => {
          console.log("");
          console.log(`${response.body.features[argv.index].place_name}`);
          console.log(chalk.yellow(`  x: ${response.body.features[argv.index].geometry.coordinates[0]}  y: ${response.body.features[argv.index].geometry.coordinates[1]}`));
          const cordX = response.body.features[argv.index].geometry.coordinates[0];
          const cordY = response.body.features[argv.index].geometry.coordinates[1];
          const darkSkyURl = 'https://api.darksky.net/forecast/';
          const darkSkytoken = '7e42fcf88c4ed04bbdd548e6c7469798';
          const darkSkyurl = `${darkSkyURl}${darkSkytoken}/${cordX},${cordY}`;
          request({ url: darkSkyurl, json: true }, (error, response) => {
            console.log(`La temperatura en esa ciudad es ${response.body.currently.temperature}`);
              });
        });
      }
    }
    catch(error){
        console.error(chalk.red("\n ERROR \n"));
    }
}

export{localization};