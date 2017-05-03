var fs = require('fs');
var chalk = require('chalk');
fs.readFile('staedte.json', (err,data) => {
    if (err) throw err;
   
    var obj = JSON.parse(data.toString());
    
    obj.cities.sort(function(a,b){
        return b.population- a.population
    });
    
    fs.writeFile('cities_sortiert.json',JSON.stringify(obj), function(error){
    
    
    obj.cities.forEach(function(cities){
        console.log(chalk.red('Name: '+cities.name));
        console.log(chalk.yellow('Country: '+cities.country));
        console.log(chalk.green('Population: '+cities.population));
        console.log('--------------------------');
    });

});
});
