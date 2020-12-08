const token = 'YWRtaW46dGVzdDEyMw==';
const decodedToken = atob(token);
const tokens = decodedToken.split(':');
// const user = tokens[0];
// const password = tokens[1];
const [user, password] = decodedToken.split(':');

const props = {
    user: {name: 'Marek'},
    onChangeFn(value) {
        console.log(value);
    },
    // rest
}

myFun(props);

function myFun({user: myUser, onChangeFn}) {
// function myFun(props) {
    // const user = props.user;
    // const onChangeFn = props.onChangeFn;
    console.log(myUser.name);
    onChangeFn('dff');
}

console.log(user);
console.log(password);




