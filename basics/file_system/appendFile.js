const fs = require('node:fs');

fs.appendFile("./basics/file_system/data.txt", " Welcomes you", function(err){
    if(err) console.error(err);
    else console.log("File is appended");
})