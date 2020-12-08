class EmployeeCtrl {
    constructor() {
        this.firstNameHistory = [];
        this.firstNameInputElement = document.querySelector('#firstName');
        this.buttonElement = document.querySelector('button');
    }

    updateHistory() {
        this.firstNameInputElement.addEventListener(
            'keyup', event => {
                const newValue = event.target.value;
                this.firstNameHistory.push(newValue);
            });
    }

    // printHistory() {
    //     this.firstNameHistory
    //         .forEach((historyItem, index) => console.log(`${index}: ${historyItem}`));
    // }

    printHistoryOnButtonClick() {
        this.buttonElement.addEventListener('click', () => {
            this.firstNameHistory
                .forEach((historyItem, index) => console.log(`${index}: ${historyItem}`));
        });
    }
}

const controller = new EmployeeCtrl();
controller.updateHistory();
// document.querySelector('button').addEventListener('click', controller.printHistory.bind(controller));
controller.printHistoryOnButtonClick();

function add(a, b) {
    console.log(this.myContext);
    return a + b;
}

add(1, 3);
add.call({myContext: 'Marek'}, 1, 3);
add.apply(null, [1, 3]);

