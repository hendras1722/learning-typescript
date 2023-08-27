interface ObjInterface {
  name: string;
  age: number;
}

type CheckStris = Record<keyof ObjInterface, string | number>;

let obj: CheckStris = {
  name: "hello world",
  age: 12,
};
let i: keyof ObjInterface;
let newObj: CheckStris = {
  name: "",
  age: 0,
};
console.log(newObj);

for (i in obj) {
  newObj[i] = obj[i];
}

console.log(newObj);
