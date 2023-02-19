
var left_operand = 2
var right_operand = 2
let ans
let operator = "+"

if (operator == "-"){
    ans = left_operand - right_operand
}
else if (operator == "+"){
    ans = left_operand + right_operand
}else if (operator == "*"){
    ans = left_operand * right_operand 
}else if (operator == "/"){
    ans = left_operand / right_operand
}else if (operator == "%"){
    ans = left_operand % right_operand
}
console.log(ans)