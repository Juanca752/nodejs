const http = require('http');

//Establecemos la ip de winodws y de Ubuntu
const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'text/plain');

    res.end('<p>juan desde vc con git</p>');
  });

  server.listen(port, hostname, () => {
    console.log(`El servidor se esta ejecutando en http://${hostname}:${port}/`);
  });
  
//Aprendiendo hacer commmit con el profe