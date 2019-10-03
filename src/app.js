import yargs from 'yargs';
import request from 'request';

const url =
  'https://api.darksky.net/forecast/7e42fcf88c4ed04bbdd548e6c7469798/40.28,3.43?units=si&lang=es';

request({ url: url, json: true }, (error, response) => {
  console.log(response.body.currently.temperature);
});

console.log('Hello world!!');