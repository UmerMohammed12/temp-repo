const { log } = require('console');
const os = require('os');



const user = os.userInfo()
console.log(user);


//system uptime
console.log(`The System Uptime is ${os.uptime()}s`);

const currentOS ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

