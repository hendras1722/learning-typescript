"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(elements) {
        this.data.push(elements);
    }
    addMultiple(elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
    get Data() {
        return this.data;
    }
}
const list = new List();
list.add({ name: "Hendra" });
console.log(list.Data);
