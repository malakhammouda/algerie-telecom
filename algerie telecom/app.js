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
    const nom = document.getElementById("nom").value;
    
    const etat = document.getElementById("etat").value;
    const surveillant = document.getElementById("surveillant").value;
    const entreprise = document.getElementById("entreprise").value;
   

    // Create a new row and append it to the table
    const newRow = tableBody.insertRow(tableBody.rows.length);
    // Insert the counter value in the first cell of the new row
    const cell1 = newRow.insertCell(0);
    cell1.textContent = counter; // Display the current counter value

    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
   
    const cell6= newRow.insertCell(5);
    


   
    cell2.textContent = nom;
    cell3.textContent = etat;
    cell4.textContent = surveillant;
    cell5.textContent = entreprise;



    
    

    // Create and append a delete button
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "Delete";
    

   
    deletebutton.addEventListener("click", function() {
        tableBody.deleteRow(newRow.rowIndex - 1);
    });

    cell6.appendChild(deletebutton);


    const detailsbutton = document.createElement("button");
    detailsbutton.textContent = "Details";

    detailsbutton.id="buttoon";

    detailsbutton.addEventListener("click", function() {
        
        window.location.href = "details.html";
      });

    cell6.appendChild(detailsbutton);


    

    counter++;

    // Close the popup and reset the form
    popupForm.style.display = "none";
    addRowForm.reset();


});
