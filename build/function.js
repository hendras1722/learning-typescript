"use strict";
function getName() {
    return "MSA Official Release";
}
function printName(name) {
    console.log("name: ", name);
}
printName("MSA official");
function Multiple(val1, val2) {
    return val1 + val2;
}
const result = Multiple(2, 10);
console.log("result: ", result);
const names = (value1, value2) => {
    return value1 + value2;
};
console.log(names("1", "2"));
// deafult parameter
const fullname = (value1, value2 = "Anindyantoro") => {
    return value1 + " " + value2;
};
console.log(fullname("MSA"));
// optional parameter
const getUmur = (value1, value2) => {
    return value1 + " " + value2;
};
console.log(getUmur("1"));
