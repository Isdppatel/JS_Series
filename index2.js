//3 node in string directory
//index of a character in str
var str="Welcome Dhruv for new Journy!"
console.log(str.indexOf("Dhruv"));

console.log(str.length);
//substr
console.log(str.slice(8,20));

//convert into lower case
console.log(str.toLowerCase());

//convert int uppercase
console.log(str.toUpperCase());

console.log(str);

//camale case
var str1;
str.split("").map((letters)=>{
    letters= letters[0].toUpperCase() + letters.substring(1).toLowerCase();
}).join("");
console.log(str);