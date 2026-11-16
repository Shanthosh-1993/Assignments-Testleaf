function launchBrowser(browserName) {

    if (browserName === "chrome") {
        return "Chrome browser launched";
    } 
    else if (browserName === "edge") {
        return "Edge browser launched";
    } 
    else {
        return "Invalid browser";
    }

}

function runTests(testType) {

    switch (testType) {

        case "smoke":
            return "Executing Smoke Tests";

        case "regression":
            return "Executing Regression Tests";

        case "sanity":
            return "Executing Sanity Tests";

        default:
            return "Invalid Test Type";
    }

}

// Function calls
console.log(launchBrowser("chrome"));
console.log(launchBrowser("edge"));
console.log(launchBrowser("Firefox"));

console.log(runTests("smoke"));
console.log(runTests("regression"));
console.log(runTests("sanity"));
console.log(runTests("InSprint"));