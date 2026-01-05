const fs = require('node:fs');

fs.unlink("data.txt",function(err){
    if(err) console.error(err);
    else console.log("File is deleted");
})