/* function numberType(i) {

    if (i > 0) {
        return "Positive Number";
    } 
    else if (i < 0) {
        return "Negative Number";
    } 
    else {
        return "Zero (Neutral)";
    }

}

let number = 10;

let result = numberType(number);

console.log(result); */

function numberType() {

    for (let i = -5; i <= 5; i++) {

        if (i > 0) {
            console.log("Positive:", i);
        } else if (i < 0) {
            console.log("Negative:", i);
        } else {
            console.log("Zero:", i);
        }

    }
}

numberType(); 

