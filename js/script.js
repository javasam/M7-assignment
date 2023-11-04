// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let employeeId;
let fullName;
let extension;
let email;
let department;
let form;
let employees = document.getElementById('employees');
let row;
let empCounter = 0;
let deleteBtn;

// HELPER FUNCTION TO RETURN DOM ELEMENT
const $ = (id) => document.getElementById(id)

// ADD EMPLOYEE
form = $('addForm')
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    employeeId  = $('id')
    fullName    = $('name')
    extension   = $('extension')
    email       = $('email')
    department  = $('department')
    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    addRow(employeeId, fullName, extension, email, department)

    // RESET THE FORM
    form.reset();
    // SET FOCUS BACK TO THE ID TEXT BOX
    employeeId.focus();
    // INCREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
    updateCounter();
})

function updateCounter() {
    let empElement = $('empCount')
    empElement.innerText = `(${empCounter})`;
}

function addRow(employeeId, fullName, extension, email, department) {
    row = employees.insertRow();
    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let idCell = row.insertCell(0);
    let nameCell = row.insertCell(1);
    let extCell = row.insertCell(2);
    let emailCell = row.insertCell(3);
    let depCell = row.insertCell(4);
    let deleteBtnCell = row.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    let idText = document.createTextNode(employeeId.value);
    let nameText = document.createTextNode(fullName.value);
    let extText = document.createTextNode(extension.value);
    let emailText = document.createTextNode(email.value);
    let depText = document.createTextNode(department.value);
    idCell.appendChild(idText);
    nameCell.appendChild(nameText);
    extCell.appendChild(extText);
    emailCell.appendChild(emailText);
    depCell.appendChild(depText);

    // CREATE THE DELETE BUTTON
    deleteBtn = document.createElement('button')

    // ADD BOOTSTRAP CLASSES FOR A BUTTON
    deleteBtn.className = 'btn btn-danger btn-sm float-end delete'
    deleteBtn.setAttribute('onclick', 'deleteRow(this)');

    // CREATE TEXT NODE FOR DELETE BUTTON AND SET IT TO 'X'
    let textDelete = document.createTextNode('X')

    // APPEND TEXT NODE TO DELETE BUTTON
    deleteBtn.appendChild(textDelete)
    depCell.appendChild(deleteBtn)
    empCounter++;
}

// DELETE EMPLOYEE
function deleteRow(element) {
    if (confirm('Are you sure you want to delete this employee?')) {
        let currentRow = element.parentNode.parentNode.rowIndex;
        employees.deleteRow(currentRow);
        // DECREMENT THE NUMBER OF EMPLOYEES IN THE TABLE
        empCounter--;
        updateCounter();
    }
}