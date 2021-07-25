"use strict";

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00');
}
// wenn isMember true ist, wird der erste Ausdruck ausgegeben, anderenfalls der Zweite.

console.log(getFee(true));
// output: "$2.00"

console.log(getFee(false));
// output: "$10.00"

// ab hier automatische Typumwandlung in Boolean
console.log(getFee(null));
// output: "$10.00"

console.log(getFee(""));
// output: "$10.00"

console.log(getFee(NaN));
// output: "$10.00"

console.log(getFee(NaN));
// output: "$10.00"

console.log(getFee(0));
// output: "$10.00"
