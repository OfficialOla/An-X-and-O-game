//for/in == gives the key/index of an array or object
//for/of == values or element

let array = [34,4,3,6,23,47,23,60];

array.forEach(Element => {
    console.log(Element**2)
});

let classRoom = {
    cohort10: {
        name: "Dekanorbs",
        total: 34,
        graduated: false,
    },
    cohort11: {
        name: "Starlinks",
        total: 40,
        graduated: false,
    },
    cohort14: {
        name: "Regnos",
        total: 62,
        graduated: false,
    },
};
console.table(classRoom)

// for(i in classRoom){
//     console.log(classRoom[i].total)
// }
//entries will give a multidimensional array
// for (i of Object.entries(classRoom)){
//     console.table(i)
// }
// for (i of Object.values(classRoom)){
//     console.table(i)
// }