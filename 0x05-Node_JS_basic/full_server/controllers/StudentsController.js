import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const path = process.argv[2];
    readDatabase(path).then((studentData) => {
      const data = ['This is the list of our students'];
      data.push(`Number of students in CS: ${studentData.CS.length}. List: ${studentData.CS.join(', ')}`);
      data.push(`Number of students in SWE: ${studentData.SWE.length}. List: ${studentData.SWE.join(', ')}`);
      res.status(200).send(data.join('\n'));
    }).catch(() => res.status(500).send('Cannot load the database'));
  }

  static async getAllStudentsByMajor(req, res) {
    const path = process.argv[2];
    const major = req.params.major.toUpperCase();
    if (major === 'CS' || major === 'SWE') {
      readDatabase(path).then((data) => {
        res.status(200).send(`List: ${data[major].join(', ')}`);
      }).catch(() => res.status(500).send('Cannot load the database'));
    } else {
      res.status(500).send('Major parameter must be CS or SWE');
    }
  }
}

export default StudentsController;
