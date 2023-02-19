// let x =1;
// console.log(typeof x)

// // Type Coercion
// let age = "20"
// age = Number(age).valueOf()
// console.log(typeof age)

// let check = true;
// check = Number(check).valueOf();
// console.log(check);

// let n = 0;
// n = Boolean(n).valueOf();
// console.log(n);

let id = "001";
let available = "true";
let count = "4";
let name = "Eloquent Javascript";
let author = "Ugo C. Ugo";

id = String(id).valueOf();

available = Boolean(available).valueOf();

count = Number(count).valueOf();

let librarian = Object()
librarian["Data"] = {
    name: name,
    available:available,
    id: id,
    count: count,
    author: author
};
console.log(librarian["Data"])

//Ternary Operator
// condition <> expression <> statement
// let isValid = false
// isValid ? console.log("Got it") : console.log("Damn!")

var renike = "Grace"
// if (renike == "Grace"){
//     console.log("Grace")
// }else if (renike == "Kindness"){
//     console.log("Kindness")
// }else {
//     console.log("Nawa!")
// }
let isValid = false;
renike == "Grace"
? console.log("Grace")
: renike == "Kindness"
? console.log("Kindness")
: renike == "Glory"
? console.log("Glory")
: console.log("Nawa!");