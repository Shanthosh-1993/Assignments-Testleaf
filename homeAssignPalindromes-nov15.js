function reverseString(S) {

    let characters = S.split("");

    let reversed = "";

    for (let i = characters.length - 1; i >= 0; i--) {

        reversed = reversed + characters[i];

    }

    return reversed;

}

console.log(reverseString("Testleaf"));

// Palindroms

function isPalindrome(S) {
    let reversed = "";

    for (let i = S.length - 1; i >= 0; i--) {
        reversed = reversed + S[i];
    }

    if (S === reversed) {
        return true;
    } 
    else {
        return false;
    }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("level"));
console.log(isPalindrome("shanthosh"));
console.log(isPalindrome("Testleaf"));