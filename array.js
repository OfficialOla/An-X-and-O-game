// declaring an array
let arr = [1,2,3,4]
let arr2 = new Array("Sam", "Eniola", "Kemi", "Ola")
let arr3 = new Array(12);
console.log(arr3.length)

Array.prototype.lol = function(){
    for(let i = 0; i < this.length; i++){
        this[i] = this[i].toLowerCase();
    }
    return this;
};
Array.prototype.lmoa = "kiokioookioohaha"

let result = arr2.lol()
//push adds to the list from the back
result.push("Yemi")
//pop removes the last element
result.pop()
result.shift()
//unshift add to the list from the first
result.unshift("Sam")
// console.log(result)
// console.log(arr2.lol());
// let newResult = result.slice(0, 2);
// let newResult = result.splice(1, 1, "Yinka", "Jonathan") 
 let badWord = [
    "fucking",
    "bullshit",
    "motherfucker",
    "fuck",
    "bitch",
    "ass",
    "asshole"
 ];
 let sentence = "I fucking love you, bitch";
 //split()
 let sentenceBreak = sentence.split(" ");
 console.log(sentenceBreak);
 for (let i = 0; i < sentenceBreak.length; i++){
    if (badWord.includes(sentenceBreak[i])){
        sentenceBreak[i] = sentenceBreak[i][0] +
         "*".repeat(sentenceBreak[i].length -2) + 
         sentenceBreak[i][sentenceBreak[i].length - 1]
    }
 }
 console.log(sentenceBreak)
 

// console.log(newResult);
console.log(result)