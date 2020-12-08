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

// CJS
module.exports = EmployeeService;

// ESM
// export {EmployeeService};
