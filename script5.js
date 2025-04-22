const addRowBtn = document.getElementById("addRowBtn");
const popupForm = document.getElementById("popupForm");
const closeBtn = document.querySelector(".closeBtn");
const addRowForm = document.getElementById("addRowForm");
const tableBody = document.getElementById("table-body");
const searchInput = document.getElementById("searchInput");

let employerData = [];
let nextId = 6; // Start after last static entry

// Modal logic
addRowBtn.addEventListener("click", () => popupForm.style.display = "flex");
closeBtn.addEventListener("click", () => popupForm.style.display = "none");
window.addEventListener("click", (e) => {
  if (e.target === popupForm) popupForm.style.display = "none";
});

// Fetch external JSON and render
fetch('employer.json')
  .then(res => {
    if (!res.ok) throw new Error('Fetch failed');
    return res.json();
  })
  .then(data => {
    employerData = data;
    nextId = Math.max(...employerData.map(e => e.id)) + 1;
    renderTable(employerData);
  })
  .catch(err => console.error('Error loading JSON:', err));

// Render table
function renderTable(data) {
  tableBody.innerHTML = "";
  data.forEach(person => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${person.id}</td>
      <td>${person.username}</td>
      <td>${person.role}</td>
      <td><button class="deleteBtn">Delete</button></td>
    `;
    // Add delete logic
    row.querySelector(".deleteBtn").addEventListener("click", () => {
      row.remove();
    });
    tableBody.appendChild(row);
  });
}

// Handle search
searchInput.addEventListener("keyup", function () {
  const val = this.value.toLowerCase();
  const filtered = employerData.filter(p =>
    p.username.toLowerCase().includes(val) ||
    p.role.toLowerCase().includes(val) ||
    p.id.toString().includes(val)
  );
  renderTable(filtered);
});

// Add new row from form
addRowForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const role = document.getElementById("role").value.trim();

  const newEntry = { id: nextId++, username, role };
  employerData.push(newEntry);
  renderTable(employerData);

  popupForm.style.display = "none";
  addRowForm.reset();
});
