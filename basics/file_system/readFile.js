const fs = require('node:fs');

fs.readFile("./basics/file_system/data.txt","utf8",function(err,data){
    if(err) console.error(err);
    else console.log(data);
})