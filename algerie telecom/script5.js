// Get elements
const addRowBtn = document.getElementById("addRowBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".closeBtn");
const addRowForm = document.getElementById("addRowForm");
const tableBody = document.getElementById("dynamicTable").getElementsByTagName("tbody")[0];


// Open the modal when clicking 'Add Row' button
addRowBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});

// Close the modal when clicking the 'X'
closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", function(event) {
    if (event.target === popupForm) {
        popupForm.style.display = "none";
    }
});


 
 

// Add a new row to the table
let counter=1;
addRowForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const username = document.getElementById("username").value;
    
   
    const role = document.getElementById("role").value;
   

    // Create a new row and append it to the table
    const newRow = tableBody.insertRow(tableBody.rows.length);
    // Insert the counter value in the first cell of the new row
    const cell1 = newRow.insertCell(0);
    cell1.textContent = counter; // Display the current counter value

    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
   
    


   
    cell2.textContent = username;
    cell3.textContent = role;
   



    
    

    // Create and append a delete button
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    

   
    deletebutton.addEventListener("click", function() {
        tableBody.deleteRow(newRow.rowIndex - 1);
    });

    cell4.appendChild(deletebutton);

    

    counter++;

    // Close the popup and reset the form
    popupForm.style.display = "none";
    addRowForm.reset();


});

 // Fetch the JSON data
 fetch('employer.json') 
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log("Fetched data:", data); // Debugging output

    const tableBody = document.getElementById('table-body');

    if (!tableBody) {
      console.error('Table body not found! Check HTML ID.');
      return;
    }

    data.forEach(person => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${person.id}</td>
        <td>${person.username}</td>
        <td>${person.role}</td>
        <td></td>
      `;
      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error('Error loading JSON:', error));