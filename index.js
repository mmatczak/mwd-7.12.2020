// data goes down
// events go up
// class Employee {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }



const formElement = document.querySelector('form');
formElement.addEventListener('submit', function handleSubmit (event) {
    event.preventDefault();

    const form = event.target;
    const firstNameElement = form.querySelector('#firstName');
    const firstName = firstNameElement.value;
    const lastNameElement = form.querySelector('#lastName');
    const lastName = lastNameElement.value;

    console.log({
        firstName, lastName
    });
})
