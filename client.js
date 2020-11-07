let employeeArray = [];
let monthlySalary = 0;

$(readyNow);



function readyNow() {
    $('#btn-submit').on('click', employeeInput)
}

function employeeInput(event) {
    event.preventDefault();
    let employeeSalary = {
        fName: $('#in-firstName').val(),
        lName: $('#in-lastName').val(),
        id: $('#in-id').val(),
        title: $('#in-title').val(),
        annualSalary: $('#in-annualSalary').val()
    }
    addEmployee(employeeSalary.fName, employeeSalary.lName, employeeSalary.id, employeeSalary.title, employeeSalary.annualSalary);
    calculateMonthlySalary();
    emptyInputs();
}

function addEmployee(fNameInput, lNameInput, idInput, titleInput, annualSalaryinput) {
    let employeeObject = {
        fName: fNameInput,
        lName: lNameInput,
        id: idInput,
        title: titleInput,
        annualSalary: annualSalaryinput,
    }
    employeeArray.push(employeeObject);
    console.log('Employee Object:', employeeObject);
    $('#tableBody').append(`<tr><th>${employeeObject.fName}</th><th>${employeeObject.lName}</th><th>${employeeObject.id}</th><th>${employeeObject.title}</th><th>${employeeObject.annualSalary}</th><th><button id="delete-btn">Delete</button>`);
    monthlySalary += (Number(employeeObject.annualSalary) / 12);
}

function emptyInputs() {
    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-annualSalary').val('');
}

function calculateMonthlySalary() {
    let calculation = $('#monthlySalaryTotal');
    calculation.empty();
    return calculation.append(`Total Monthly: ${monthlySalary}`);
}
