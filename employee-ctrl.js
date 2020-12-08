class EmployeeCtrl {
    constructor(editedEmployeeId, employees) {
        this.employeeId = editedEmployeeId;
        this.employees = employees;
    }

    initializeForm() {
        const form = document.querySelector('form');
        form.addEventListener('submit', this.onSave.bind(this));

        return this.employees.getOne(this.employeeId)
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

// CJS
module.exports = EmployeeCtrl;

// ESM
// export {EmployeeCtrl};
