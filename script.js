// JavaScript to handle form submission and table row addition

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('entryForm');
    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Create a new row and cells
        const newRow = tableBody.insertRow();
        const cellIndex = newRow.insertCell(0);
        const cellName = newRow.insertCell(1);
        const cellEmail = newRow.insertCell(2);

        // Set cell values
        cellIndex.textContent = tableBody.rows.length; // Set row number
        cellName.textContent = name;
        cellEmail.textContent = email;

        // Reset form
        form.reset();
    });
});
