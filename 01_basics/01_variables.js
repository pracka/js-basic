const accountId = 144553
let accountEmail = "p@google.com"
var accountPassword = "12345"
accountCity = "Bbsr"

// accountId = 2 

accountEmail = "hehe@com"
accountPassword = "noone"
accountCity = "Bengaluru"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])

/*
prefer not to use var 
because of issue in block and functional scope
*/