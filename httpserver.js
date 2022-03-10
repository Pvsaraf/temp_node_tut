// const req = require('express/lib/request');
const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    console.log(req.url);       //Prints request
       //200 Ok, 500 Server error, 404 Not found
    res.setHeader('Content-type', 'text/html');
    if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> This is ----> Parth Saraf </h1> <p> Great learning </p>');
    }
    else if(req.url == '/hello')
    {
        res.statusCode = 300;
        res.end('<h1> About Parth learning Node JS </h1>');
    }
    else if(req.url == '/')
    {
        res.statusCode = 200;
        const data = fs.readFileSync('Index.html')
        res.end(data.toString());
    }
    else
    {
        // res.parth();
        res.statusCode = 404;
        res.end("The page was not found on this server");
    }
});

server.listen(port, () =>{
    console.log(`Server is listening on port ${port}`);
    console.log("parth");
}); 
