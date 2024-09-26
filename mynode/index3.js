const fs = require('fs');
var msg="Hello From node";
fs.writeFile("message.txt",msg,(err) =>{
if (err) throw err;
console.log("Write file error");
});no