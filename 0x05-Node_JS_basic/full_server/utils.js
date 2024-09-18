import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
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
      return resolve({ CS: cs, SWE: swe });
    });
  });
}

export default readDatabase;
