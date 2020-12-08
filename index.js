const myNumbers = [1, 3, 5, 6, 8];
const names = ['Marek', 'John', 'James'];
const person = [{
    name: 'Marek',
    age: 41
}];

// myNumbers.push(2, 4, 4);
// myNumbers.push();
// myNumbers.splice()

let sum = 0;
for (let i = 0; i < myNumbers.length; i++) {
    const myNumber = myNumbers[i];
    const biggerNumber = add2(myNumber)
    if (onlyGreaterThan5(biggerNumber)) {
        sum = sum + biggerNumber;
    }
}

console.log(sum);

console.log(myNumbers
    .map(add2)
    .filter(onlyGreaterThan5)
    .reduce((sum, myNumber) => sum + myNumber, 0)
);

function onlyGreaterThan5(myNumber) {
    return myNumber > 5;
}

function add2(myNumber) {
    return myNumber + 2;
}




