let numOrStr = prompt('Enter number or string');
console.log(numOrStr);

let result;

function checkInput(input) {
    switch (true) {
        case input === null:
            result = 'You canceled';
            break;
        case input === '':
            result = 'Empty string';
            break;
        case isNaN(+input):
            result = 'Not a number';
            break;
        default:
            result = 'Ok!';
    }
}

checkInput(numOrStr);


console.log(result);