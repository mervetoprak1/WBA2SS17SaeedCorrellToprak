var fs = require('fs');
<<<<<<< HEAD
fs.readFile('staedte.json', (err, data) => {
   if (err) throw err;

   var obj = JSON.parse(data.toString());

   obj.cities.forEach(function(cities){
       console.log('Name: '+cities.name);
       console.log('Country: '+cities.country);
       console.log('Population: '+cities.population);
       console.log('--------------------------------');
  });

});
=======


fs.readFile('staedte.json', (err, data) => {
  if (err) throw err;
  var obj = JSON.parse(data.toString());

  obj.cities.forEach(function(cities){
    console.log('Name: '+cities.name);
    console.log('Country: '+cities.country);
    console.log('Population: '+cities.population);
    console.log('----------------------');
});
});
>>>>>>> 8b7d39cfc61fe290253c01a91b3c3885578c7724
