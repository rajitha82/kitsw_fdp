const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Load student data
const studentsFile = './students.json';

// Get all students
app.get('/api/students', (req, res) => {
  const data = fs.readFileSync(studentsFile);
  res.json(JSON.parse(data));
});

// Add a student
app.post('/api/students', (req, res) => {
  const { roll, name } = req.body;
  const students = JSON.parse(fs.readFileSync(studentsFile));
  students.push({ roll, name });
  fs.writeFileSync(studentsFile, JSON.stringify(students, null, 2));
  res.json({ message: 'Student added successfully' });
});

// Delete a student
app.delete('/api/students/:roll', (req, res) => {
  const roll = req.params.roll;
  let students = JSON.parse(fs.readFileSync(studentsFile));
  students = students.filter(s => s.roll != roll);
  fs.writeFileSync(studentsFile, JSON.stringify(students, null, 2));
  res.json({ message: 'Student removed' });
});

// Submit attendance
app.post('/api/attendance', (req, res) => {
  const attendanceData = req.body.attendance;
  const students = JSON.parse(fs.readFileSync(studentsFile));
  let csv = 'Roll,Name,Present\n';
  let absentees = 0;

  students.forEach(student => {
    const present = attendanceData.includes(student.roll) ? 1 : 0;
    if (!present) absentees++;
    csv += `${student.roll},${student.name},${present}\n`;
  });

  csv += `,,Total Absentees: ${absentees}`;

  const csvPath = path.join(__dirname, 'attendance', 'attendance.csv');
  fs.writeFileSync(csvPath, csv);

  res.download(csvPath);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
