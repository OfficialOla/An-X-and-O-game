// keyword function  isn't needed
var addition = (firstNumber, secondNumber) => firstNumber + secondNumber
    
console.log(addition(5, 4))

// var addition = firstNumber => firstNumber * 2
// console.log(addition(5))

// var addition = () => console.log("I'm here!")

// addition()

// var addition = colour => ({"bala":colour})

// console.log(addition("blue"))

// var addition = color => {return {"bala":color}}
// console.log(addition("blue"))

// func tion as an argument
function helloWorld(func){
    console.log("I'm in here rn")
    func()
    console.log("After the function")
}
function me(){
    console.log("I am the function")
}
// helloWorld(me)
// helloWorld(() => console.log("I am the "))

var obj = {
    name: me(),
    age: 12
}
console.log(obj.age)