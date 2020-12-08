// Create the EmployeeService with two methods:
// getOne: (id: number): Promise<{id: number, firstName: string, lastName: string}>  // delay of 1 sec.
// update: (employee: {id: number, firstName: string, lastName: string}): Promise<{id: number, firstName: string, lastName: string}> // delay of 1 sec.

class EmployeeService {
    getOne(id) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({id, firstName: 'John', lastName: 'Smith'});
            }, 1000);
        });
    }

    update(employee) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({...employee});
            }, 1000);
        });
    }
}


// Create the EmployeeCtrl which
// initializes the form with the values coming from EmployeeService.getOne (let us assume id = 1234)
// on form submission call the EmployeeService.update and print eventually the changed employee object to the console

class EmployeeCtrl {
    constructor(editedEmployeeId, employees) {
        this.employeeId = editedEmployeeId;
        this.employees = employees;
    }

    initializeForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', this.onSave.bind(this));

        this.employees.getOne(this.employeeId)
            .then(employee => {
                this.firstNameValue = employee.firstName;
                this.lastNameValue = employee.lastName;
            });
    }

    onSave(event) {
        event.preventDefault();
        const currentEmployee = {
            id: this.employeeId,
            firstName: this.firstNameValue,
            lastName: this.lastNameValue
        }
        this.employees.update(currentEmployee)
            .then(updatedEmployee => console.log(updatedEmployee));
    }

    set firstNameValue(newValue) {
        this.setInputValue(newValue, '#firstName');
    }

    get firstNameValue() {
        return this.getInputValue('#firstName')
    }

    set lastNameValue(newValue) {
        this.setInputValue(newValue, '#lastName');
    }

    get lastNameValue() {
        return this.getInputValue('#lastName')
    }

    setInputValue(newValue, selector) {
        const inputElement = document.querySelector(selector);
        if (inputElement) {
            inputElement.value = newValue;
        }
    }

    getInputValue(selector) {
        const inputElement = document.querySelector(selector);
        if (inputElement) {
            return inputElement.value;
        }
    }
}

const controller = new EmployeeCtrl(1234, new EmployeeService());
controller.initializeForm();
