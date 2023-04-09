//throught his, you will get access to all the methods of the built-in method os. to import it use just os instead of default'./os'
const os = require('os');

//getting info about user
const user = os.userInfo()

// console.log(user)

//prints the time the system has been running for in seconds
console.log(os.uptime())
//os type
console.log(os.type());
//total memory in the OS
console.log(os.totalmem())