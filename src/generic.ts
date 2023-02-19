function getData(value: any) {
  console.log(value);
}

function getData2<T>(value: T) {
  return value;
}

console.log(getData2("were"));
