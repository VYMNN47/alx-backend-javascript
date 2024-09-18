#!/usr/bin/node
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      const cs = [];
      const swe = [];

      students.forEach((line) => {
        const [name, , , field] = line.split(',');
        if (field === 'CS') {
          cs.push(name);
        } else if (field === 'SWE') {
          swe.push(name);
        }
      });

      console.log(`Number of students: ${students.length}`);
      console.log(`Number of students in CS: ${cs.length}. List: ${cs.join(', ')}`);
      console.log(`Number of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);

      resolve(`Number of students: ${students.length}\nNumber of students in CS: ${cs.length}. List: ${cs.join(', ')}\nNumber of students in SWE: ${swe.length}. List: ${swe.join(', ')}`);
    });
  });
}

module.exports = countStudents;
