const os = require("node:os");
// console.log(os);

const freeMemory = os.freemem();
console.log(freeMemory);

const userName = os.userInfo();
console.log(userName);
