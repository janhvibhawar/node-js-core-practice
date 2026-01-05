const fs = require('node:fs');

fs.appendFile("./basics/fs/data.txt", " Welcomes you", function(err){
    if(err) console.error(err);
    else console.log("File is appended");
})