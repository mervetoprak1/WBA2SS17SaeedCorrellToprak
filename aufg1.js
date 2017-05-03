var fs = require('fs');
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