var fs = require('fs');
<<<<<<< HEAD
var chalk = require('chalk');
fs.readFile('staedte.json', (err,data) => {
    if (err) throw err;
   
    var obj = JSON.parse(data.toString());
    
    obj.cities.forEach(function(cities){
        console.log(chalk.red('Name: '+cities.name));
        console.log(chalk.yellow('Country: '+cities.country));
        console.log(chalk.green('Population: '+cities.population));
        console.log('--------------------------');
    });

});

=======
var chalk = require ('chalk');

fs.readFile('staedte.json', (err, data) => {
  if (err) throw err;
  var obj = JSON.parse(data.toString());

  obj.cities.forEach(function(cities){
    console.log(chalk.red('Name: '+cities.name));
    console.log(chalk.blue('Country: '+cities.country));
    console.log(chalk.yellow('Population: '+cities.population));
    console.log('----------------------');
});
});
>>>>>>> 8b7d39cfc61fe290253c01a91b3c3885578c7724
