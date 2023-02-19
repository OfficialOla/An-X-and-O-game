// let arr = [10, 30, 40, 50, 60, 90, 70]
// let multipliedArr = []
// //for each values in arr, => do this:
// arr.forEach((number) => multipliedArr.push(number * 2))
// console.log(arr)
// console.log(multipliedArr)

// let arrElement = [10, 30, 40, 50, 60, 90, 70]
// let newArr = arrElement.reduce((prev, curr) => prev + curr)
// console.log(arrElement)
// console.log(newArr)

// let arr = [10, 30, 40, 50, 60, 90, 70]
// let newArr = arr.filter(x => x > 40).reduce((prev, curr) => prev + curr)
// console.log(arr)
// console.log(newArr)

let arr = [10, 30, 40, 50, 60, 90, 70]
let newArr = arr.filter((number)=>number >30)
console.log(arr)
console.log(newArr)
export {newArr}