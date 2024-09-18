const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.method === 'GET' && req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    res.statusCode = 200;
    const path = process.argv[2];
    res.write('This is the list of our students\n');
    try {
      const studentsData = await countStudents(path);
      res.end(studentsData);
    } catch (err) {
      res.statusCode = 500;
      res.end('Cannot load the database');
    }
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
