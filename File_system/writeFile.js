const fs = require('node:fs');

fs.writeFile("./basics/file_system/data.txt", "Hello Node.js", function(err){
    if(err) console.error(err);
    else console.log("File created");
})
