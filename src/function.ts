function getName(): string {
  return "MSA Official Release";
}

function printName(name: string): void {
  console.log("name: ", name);
}

printName("MSA official");

function Multiple(val1: number, val2: number): number {
  return val1 + val2;
}

const result = Multiple(2, 10);
console.log("result: ", result);

// function as type
type checkName = (value1: string, value2: string) => string;

const names: checkName = (value1: string, value2: string): string => {
  return value1 + value2;
};
console.log(names("1", "2"));

// deafult parameter
const fullname = (value1: string, value2: string = "Anindyantoro"): string => {
  return value1 + " " + value2;
};
console.log(fullname("MSA"));

// optional parameter
const getUmur = (value1: string, value2?: number): string => {
  return value1 + " " + value2;
};
console.log(getUmur("1"));
