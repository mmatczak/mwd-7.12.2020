const EmployeeService = require('./employee-service');

describe('EmployeeService', () => {
    it ('gets employee', () => {
        // given
        expect.hasAssertions();
        const id = 123;
        const employees = new EmployeeService()
        // when
        return employees.getOne(id).then(employee => {
            // then
            expect(employee).toBeDefined();
            expect(employee.id).toBe(id);
            expect(employee.firstName).toBe('John');
            expect(employee.lastName).toBe('Smith');
        });
    })
})
