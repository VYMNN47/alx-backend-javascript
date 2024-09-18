const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const path = process.argv[2];
  res.write('This is the list of our students\n');
  try {
    const studentsData = await countStudents(path);
    res.end(studentsData);
  } catch (err) {
    res.status(500).end('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
