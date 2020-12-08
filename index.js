class EmployeeService {
    getOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id < 0) {
                    reject(`Id not correct ${id}`);
                } else {
                    resolve({
                        id, name: 'John'
                    });
                }
            }, 1000);
        });
    }
}

const employees = new EmployeeService();
employees.getOne()
    .then(
        employee => {
            return employee.id;
        }, error => {
            console.error(error);
            return Promise.reject(error); // throw e
        })
    .then(id => {
            console.log(id);
        },
        error => console.error(error))
    .then(null, error => console.error(error))
    .catch(error => console.error(error))


console.log('End'); // 1

