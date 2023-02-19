let dataScientistTable = [[200, 50, 300, 5], [10, 25, 7, 100], [25, 20, 70, 45], [500, 170, 11, 35]]
console.table(dataScientistTable)
var row = 3
var start = 2
var end = 3
for (i = 0; i < dataScientistTable.length; i++){
    if (row <0 || row > dataScientistTable[i].length || start > dataScientistTable[i].length || start<0 || end >dataScientistTable[i].length){
     console.log("Index out of bound!")
    }else
    result = dataScientistTable[row].slice(start, end)}
console.log(result)

