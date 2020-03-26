const request = require('request')
const cheerio = require('cheerio')

request('https://www.worldometers.info/coronavirus/',(error, response, html)=>{
    if(!error && response.statusCode == 200){

        const $ = cheerio.load(html);
        const header = $('.label-counter').text();
        const inner = $('.content-inner').children('#maincounter-wrap').text();
        console.log(header);
        console.log(inner);
    }
})