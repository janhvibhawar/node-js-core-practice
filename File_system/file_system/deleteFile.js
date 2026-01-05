const fs = require('node:fs');

fs.unlink("./basics/file_system/data.txt",function(err){
    if(err) console.error(err);
    else console.log("File is deleted");
})