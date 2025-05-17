let names = [];
let employees = []; 

function showAll() {
    const list = document.getElementById('name-list');
    let nameList = "";
    names.forEach(element => {
        nameList += element + "<br/>";
    });
    list.innerHTML = nameList;
}

function addName() {
    const name = document.getElementById('name').value;
    if (name) {
        names.push(name);
        console.log(name);
        showAll();
        clearNameField();
    } else {
        alert("Please enter a name.");
    }
}

function clearNameField() {
    document.getElementById('name').value = "";
}

function showEmployees() {
    const tableBody = document.getElementById('employee-body');
    tableBody.innerHTML = ''; 

    employees.forEach(employee => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${employee.emp_id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
        `;
        tableBody.appendChild(row);
    });
}

function addEmployee() {
    const id = document.getElementById('emp_id').value;
    const name = document.getElementById('emp_name').value;
    const position = document.getElementById('emp_position').value;

    if (id && name && position) {
        employees.push({ emp_id: id, name: name, position: position });
        showEmployees();
        clearEmployeeFields();
    } else {
        alert('Please fill in all fields');
    }
}

function clearEmployeeFields() {
    document.getElementById('emp_id').value = '';
    document.getElementById('emp_name').value = '';
    document.getElementById('emp_position').value = '';
}