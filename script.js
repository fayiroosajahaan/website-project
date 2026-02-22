
document.getElementById('attendance-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const studentName = document.getElementById('student-name').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    // Ensure the table exists
    const table = document.getElementById('attendance-table');
    if (!table) {
        console.error('Attendance table not found.');
        return;
    }

    // Ensure the table has a tbody
    const tableBody = table.querySelector('tbody');
    if (!tableBody) {
        console.error('Table body (tbody) not found.');
        return;
    }

    // Insert a new row at the end of the table body
    const newRow = tableBody.insertRow();

    // Insert new cells for name, date, and status
    const nameCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const statusCell = newRow.insertCell(2);

    // Set the text content for each cell
    nameCell.textContent = studentName;
    dateCell.textContent = date;
    statusCell.textContent = status;
});
