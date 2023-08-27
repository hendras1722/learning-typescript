"use strict";
let obj = {
    name: "hello world",
    age: 12,
};
let i;
let newObj = {
    name: "",
    age: 0,
};
console.log(newObj);
for (i in obj) {
    newObj[i] = obj[i];
}
console.log(newObj);
