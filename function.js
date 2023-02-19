
function addNum(num1, num2){

return num1 + num2
}   

// console.log(addNum(23, 45))

// declaring and calling a function at the same time

var addFunction = function addNum(num1, num2){
    return num1 + num2
}(12, 44)

// console.log(addFunction)

function outer(){
    var even = 3
    //the === is for comparison. comparing 2 values
    if (even % 2 === 0){
        return;
    }
    // console.log(even)
}
outer()

// function in a function {nested function}
function outerFunc(){
    var even = 2
    function inner(number){
        console.log("Inner func: ", number)
    }
    inner(even)
    console.log("Outer func is here")
}
outerFunc()

let price = 55.43
 function getPrice(code){ 
    function getDiscountedPrice(percentage){
price *=percentage
    }
    if (code != null){
        getDiscountedPrice(code.discount)
    }
    return price
}
var itemDiscount = {
    discount : 0.5
}
// console.log(givenPrice(itemDiscount))
console.log(getPrice(itemDiscount))
