const num = 50;
if (num <= 49)
{
    console.log('to les');
}
else if (num > 100)
{
    console.log('to much');
}
else
{
    console.log('Ok');
}

(num === 50) ? console.log('OK') : console.log('Error');

function getFree(isMember) {
return(isMember ? '2.00$' : '10.00$');
}
console.log(getFree(true)); // 2.00$
console.log(getFree(false)); // 10.00$
console.log(getFree(null)); // 10.00$

let age = 26;
let canDrinkAlcohol = (age >= 21) ? "True, 21 or older" : "False, under 21";
console.log(canDrinkAlcohol); // "True, 21 or older"

const num2 = 50; // gleiches Prinzip auch bei Strings. '50'
switch (num2) {
    case 49:
        console.log('wrong');
        break;
    case 100:
        console.log('wrong');
        break;
    case 50:
        console.log('thats right');
        break;
    default:
        console.log('no no no, not this time');
        break;
}