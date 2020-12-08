const EmployeeCtrl = require('./employee-ctrl');
const EmployeeService = require('./employee-service');


describe('EmployeeCtrl', () => {
    it('initializes inputs with employee from service', () => {
        // given
        expect.hasAssertions();
        document.body.innerHTML = `
        <form>
        <label for="firstName">First name</label>
    <input id="firstName">
    <label for="lastName">Last name</label>
    <input id="lastName">
    <button>Save</button>
</form>
        `;
        const controller = new EmployeeCtrl(1234, new EmployeeService());
        // when
        return controller.initializeForm().then(() => {
            // then
            const firstNameElement = document.querySelector('#firstName');
            expect(firstNameElement).not.toBeNull();
            expect(firstNameElement.value).toBe('Johdsfsn');
        });
    });
});
