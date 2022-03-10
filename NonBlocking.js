fs = require('fs');

fs.readFile('test.txt', function(err,data){
    if(err)
    {
        console.log(err);
    }

    setTimeout(()=>{
        console.log("Display after 2 seconds");
    }, 2000);
});

console.log("Start here");