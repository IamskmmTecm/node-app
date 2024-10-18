// const pp = require('./index.js'); //  const pp = firstObj

// pp.fun1() 

// pp.fun2() // pp.fun2()

// console.log(pp.val1)

// const local = require("./Welcome.js");
// local.sayHello();
// console.log(local.currTime);
// console.log(local.companyName);


// const fs = require('fs');
// fs.writeFileSync('First.js', "console.log('I am in node')");
// console.log('File created');

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res)=>{

//     let urlGet = req.url
//     if( req.url === '/'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>')
//         res.write('<title>MY Form</title>')
//         res.write('<body>');
//         res.write('<h1>Welcome Sumit</h1>')
//         res.write('<form action="/create-user" method="POST">')
//         res.write('<input name="Nme" />')
//         res.write('<button>send</button>')
//         res.write('</body>')
//         res.write('</html>')
//         console.log("/////////////////////////")
//          return res.end()
//     }

//     if(req.url ==='/create-user' && req.method==='POST'){
//         const arr = []
//         req.on('data', chunk=> {
//             console.log(chunk);
//             arr.push(chunk)
//         });
//         req.on('end', ()=> {
//             const p = Buffer.concat(arr).toString();
//             console.log(p);
//         });
//         res.statusCode = 302; 
//         res.setHeader('Location', '/')
//         return res.end();
//     }
//     if(req.url ==='/users'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html><title>USERS</title><body><ul><li>user1</li><li>user2</li><li>user3</li></ul></body></html>")
//         return res.end();
//     }
//         res.setHeader('Content-Type', 'text/html');
//         res.write("<html><title>this is</title><body>HI My Nme is Sumit</body></html>")
//         return res.end();
//     }
// ).listen(8001)


const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write(
      '<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }
  // Send a HTML response with some "Page not found text
  if (url === '/create-user') {
    const body = [];
    req.on('data', chunk => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1]); // username=whatever-the-user-entered
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});

server.listen(3000);


// const http = require('http');
 
// http.createServer((req, res)=>{
//     // process.exit();
 
//     if(req.url === '/'){
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html>')
//         res.write('<title>MY Form</title>')
//         res.write('<body>')
//         res.write('<form action="/NEwPage" method="POST">')
//         res.write('<input name="Nme" />')
//         res.write('<button>send</button>')
//         res.write('</body>')
//         res.write('</html>')
//         console.log("/////////////////////////")
//         return res.end();
//     }
//     console.log("this is why")
//     res.setHeader('Content-Type', '');
//     res.write("<html><title>this is</title><body>HI My Nme is Sumit</body></html>")
//     res.end();
// }).listen(8001)