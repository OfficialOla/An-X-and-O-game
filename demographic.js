let total = 0;
// const demographic = {
let countryOne = {
    name: "Sydney",
    population: 1250000,
    temp: 3.0,
    currency: "AUD"  
    }

let countryTwo = {
    name: "Nigeria",
    population: 200_000_000,
    temp: 16.0,
    currency: "NG"
    }

let countryThree = {
    name: "Mexico",
    population: 130_759_000,
    temp: 20.0,
    currency: "$"
    }

let countryFour = {
    name: "China",
    population: 1_439_323_776,
    temp: 8.0,
    currency: "¥"
}

let countryFive = {
    name: "India",
    population: 1_366_417_754,
    temp: 20.0,
    currency: "₹"
}
let countrySix = {
    name: "Brazil",
    population: 211_823_221,
    temp: 25.0,
    currency: "R$"
}
let countrySeven = {
    name: "Japan",
    population: 126_475_664,
    temp: 8.0,
    currency: "¥"
}

let countryEight = {
    name: "Egypt",
    population: 99_392_064,
    temp: 20.0,
    currency: "EGP"
}

let countryNine = {
    name: "Philippines",
    population: 109_581_078,
    temp: 25.0,
    currency: "₱"
}

let demo = [[null, countryOne, countryTwo, countryThree],
            [countryFour, countryFive, countrySix, null],
            [countrySeven, null, countryEight, countryNine]]

for (var i = 0; i < demo.length; i++){
    for(var j = 0; j < demo[i].length; j++){
        if(demo[i][j] && demo[i][j].temp <= 10){
            total += demo[i][j].population
            console.table(demo[i][j])
        }
    
    }
    
}
console.log("The total of the population of countries whose temperature is less than 10 is: " +total) 