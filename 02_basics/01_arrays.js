// array

const newArr = [0, 1, 2, 3, 4, 5];
//console.log(newArr[2]); //2

//console.log(newArr.push("hemant", "Bisu"));

// slice , splice
//console.log("A ", newArr);

const newn1 = newArr.slice(1, 3);
//console.log(newn1);

const marvel_heros = ["Captain America", "Thor", "Ironman"];
const dc_heros = ["Superman", "Batman", "Flash"];
//marvel_heros.push(dc_heros);
const all_heros = marvel_heros.concat(dc_heros);
//console.log(marvel_heros);
//console.log(all_heros);

// spread oprators ex:- drop glass down and it will spread

const new_all_heros = [...marvel_heros, ...dc_heros];
console.log(new_all_heros);
