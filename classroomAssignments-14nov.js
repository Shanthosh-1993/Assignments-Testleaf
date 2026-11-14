const browserVersion = "Chrome";

function getBrowserVersion() {
    
 if (browserVersion == "Chrome") {

     let application = "Microsoft"
     var userName= "Public"

        console.log("Inside",application);
        console.log("Inside",userName);
    }
    
  console.log("Outside",browserVersion);
  console.log("Outside",userName);
     }
getBrowserVersion();

console.log("Outside function block",browserVersion);