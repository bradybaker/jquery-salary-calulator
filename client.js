

$(readyNow);

let employeeArray = [];

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
    addEmployee(employeeSalary.fName, employeeSalary.lName, employeeSalary.id, employeeSalary.title, employeeSalary.annualSalary)
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
}