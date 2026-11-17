//Example 01/02

function lengthOfLastWord(s) {

    let words = s.trim().split(" ")
    let lastWord = words[words.length - 1]

    return lastWord.length
    
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));

//Example 03

let S1 = "listen" , S2 = "silent"

function areAnagrams(S1, S2) {
    let sortedS1 = S1.split("").sort().join("");
    let sortedS2 = S2.split("").sort().join("");
    return sortedS1 === sortedS2;
}

console.log(areAnagrams(S1 , S2));
console.log(areAnagrams("hello", "world"));