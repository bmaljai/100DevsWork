// Variables
//You are getting ready to face Brock for the Boulder Badge. You want three pokemon on your team that each have evolved at least once.
//You have bulbasaur which is at level 5 and evolves at level 16, 
//caterpie which is at level 1 and evolves at level 7, 
//and weedle which is at level 1 and evolves at level 7. 
//Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one). 
//Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.
let bulbasaurCandies, caterpieCandies, weedleCandies, totalCandies;
bulbasaurCandies = 16 - 5;
caterpieCandies = 7-1;
weedleCandies = 7-1;
totalCandies = bulbasaurCandies+caterpieCandies+weedleCandies;

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius. Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
const convertFtoC = function(fahrenheit_value){
    let celsius_value = (fahrenheit_value-32)/1.8;
    return celsius_value;
}
const canCharmanderBattle = function(temperature_in_fahrenheit){
    let temperature_in_celsius = convertFtoC(temperature_in_fahrenheit);
    let battleStatus = "no battle status";
    if(temperature_in_celsius > 0){
        battleStatus = "can battle"
    }else{
        battleStatus = "cannot battle"
    }
    return battleStatus;
}
let battleStatusCharmander = canCharmanderBattle(32);
console.log(battleStatusCharmander);
//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon. Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party
const underGroundPokemonLeague = function(number_of_pokemon){
    for(let i=0;i<number_of_pokemon;i++){
        console.log("Pikachu I choose you")
    }
}
underGroundPokemonLeague(6);