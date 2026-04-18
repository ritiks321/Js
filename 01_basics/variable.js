const accountId = 123
let accountEmail = "ritik77@gmail.com"
var accountPass = "54321"
accountCity = "Lucknow"
let accountState

//accountId = 2  // not allowed

accountEmail = "rs77@gmail.com"
accountPass = "12345"
accountCity = "Noida"

console.log(accountId)
/*
prefer not to use var
beacuse of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPass,accountCity,accountState])