class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(elements: T): void {
    this.data.push(elements);
  }

  addMultiple(elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
  get Data(): T[] {
    return this.data;
  }
}

const list = new List<Object>();
list.add({ name: "Hendra" });
console.log(list.Data);
