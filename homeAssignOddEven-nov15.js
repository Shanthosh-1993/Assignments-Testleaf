/* function isOddOrEven(i) {

    if (i % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }

}

let number = 10;

let result = isOddOrEven(number);

console.log(result);  */
 
function isOddOrEven() {

    for (let i = 0; i <= 10; i++) {

        if (i % 2 === 0) {
            console.log("Even:", i);
        } else {
            console.log("Odd:", i);
        }

    }
}

isOddOrEven(); 