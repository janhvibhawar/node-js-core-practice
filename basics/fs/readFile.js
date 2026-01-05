const fs = require('node:fs');

fs.readFile("./basics/fs/data.txt","utf8",function(err,data){
    if(err) console.error(err);
    else console.log(data);
})