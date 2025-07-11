document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('/api/students');
  const students = await res.json();
  const tableBody = document.getElementById('student-table-body');

  students.forEach(student => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${student.roll}</td>
      <td>${student.name}</td>
      <td><input type="checkbox" name="present" value="${student.roll}" /></td>
    `;
    tableBody.appendChild(row);
  });

  document.getElementById('attendance-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const presentRolls = Array.from(document.querySelectorAll('input[name="present"]:checked'))
                              .map(input => input.value);
    const response = await fetch('/api/attendance', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ attendance: presentRolls })
    });

    if (response.ok) {
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'attendance.csv';
      a.click();
    }
  });
});
