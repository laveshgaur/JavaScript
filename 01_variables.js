const accountId = 101;
let accountEmail = "lavesh@google.com";
var accountPassword = 1234;
accountCity = "Aligarh";
let accountState;

// accountId=2; // not allowed

accountEmail = "abc@google.com";
accountPassword = "99293";
accountCity = "Greater Noida";


/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
