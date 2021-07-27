const request = require('sync-request');

const Utils = require('./utils.js');

const GET_SAKE_INFO_URL = 'https://cocktail-f.com/api/v1/cocktails/';

function getSakeById(id) {
  var response = request('GET',GET_SAKE_INFO_URL+id);
  console.log("Status Code (function) : "+response.getBody());
  return JSON.parse(response.getBody());
};

let getSakeInfoRandom = function() {
  let r = Math.floor(Math.random() * 250);
  let d = getSakeById(r);
  
  let c = d.cocktail;
  let dot = function(){ return Utils.randif(1,2) ?'、' :'' };
  let text = c.cocktail_name + dot() + 'の作り方' + dot() + 'だよ';
  for(let i in c.recipes) {
    let re = c.recipes[i];
    text += '\n・' + re.ingredient_name + '　' + (re.amount!=null?re.amount:'') + re.unit;
  }
  return text;
}
exports.getSakeInfoR = getSakeInfoRandom;
