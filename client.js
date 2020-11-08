let totalEmployees = 0
let totalSalary = 0;

$(readyNow);

function readyNow() {
    $('#btn-submit').on('click', addEmployee);
    $('#tableBody').on('click', '#delete-btn', removeEmployee);
}

function addEmployee(event) {
    event.preventDefault();
    let employeeSalary = Number($('#in-annualSalary').val())
    $('#tableBody').append(`
        <tr class="tableRow">
            <th>${$('#in-firstName').val()}</th>
            <th>${$('#in-lastName').val()}</th>
            <th>${$('#in-id').val()}</th>
            <th>${$('#in-title').val()}</th>
            <th>${employeeSalary}</th>
            <th>
                <button id="delete-btn">Delete</button>
            </th>
        </tr>`);
    totalEmployees++
    displayTotalEmployees();
    totalSalary += (employeeSalary);
    displayMonthlySalary(employeeSalary);
    totalSalary > 20000 && $('#monthlySalaryTotal').addClass('monthlyRed');
    emptyInputs();
}

function emptyInputs() {
    $('#in-firstName').val('');
    $('#in-lastName').val('');
    $('#in-id').val('');
    $('#in-title').val('');
    $('#in-annualSalary').val('');
}

function displayMonthlySalary() {
    let calculation = $('#monthlySalaryTotal');
    calculation.empty();
    return calculation.append(`Total Monthly: $${Number(totalSalary / 12).toFixed(2)}`);
}

function displayTotalEmployees() {
    let employee = $('#employeeTotal')
    employee.empty();
    return employee.append(`Number of Employees: ${totalEmployees}`)
}

function removeEmployee() {
    totalEmployees--
    displayTotalEmployees();
    totalSalary -= Number(($(this).closest('tr')[0].children[4].innerHTML));
    displayMonthlySalary()
    $(this).closest('tr').remove();
}