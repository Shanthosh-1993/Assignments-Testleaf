/* let str = "Testleaf";

let reversed = str.split("").reverse().join("");

console.log(reversed); */

let str = "Testleaf";

console.log(str.split(""));

let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed);