console.log("Hello world!")
// list = [40, 34, 56]
// let priceOfItem = 500
// quantity = 2
// totalOfGoods = priceOfItem * quantity
// console.log(totalOfGoods)
// var firstName = "Bolaji"
// let lastName = "Omayuku"
// const ID = "12VBh87"

// console.log(firstName)
// console.log(lastName)
// console.log(ID)
// lastName = "jSJB67HLJ"
// console.log(lastName)

let var1 = 2
let var2 = 4
let var3 = 6
let temp = var1

var1 = var2
var2 = var3
var3 = temp


// console.log(var1)
// console.log(var2)
// console.log(var3)


// var check = "3" === "4";
// console.log(check);
// console.log(false && ! false)
// console.log(true &&  true)
// console.log(2+4*3%5-1*6/(1+1))
// console.log(12%5)

let user = {
    userName: "don104"
}
console.log(user["userName"]) 

let c14_database = Object()

c14_database["001"] = {
    name:"Fola",
    age:23,
    gender: "LGBTQ",
    height: "5'7",
    single: "ripped"
};
c14_database["002"] = {
    name:"James",
    age:24,
    gender: "Male",
    height: "5'4",
    single: "situationship"
};
c14_database["003"] = {
    name:"Ugo",
    age:30,
    gender: "Female",
    height: "5'5",
    single: "married"
};
console.log(c14_database["001"])
console.log(c14_database["003"])

let sum = 1 + "1"
console.log(sum) 
console.log(typeof sum)