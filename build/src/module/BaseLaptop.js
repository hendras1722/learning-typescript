"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// base laptop diclass lain memakai abstract
// digunakan untuk didalam kelas
class BaseLaptop {
    constructor(name, type, withNumeric, withTouchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = withNumeric;
        this.withTouchButton = withTouchButton;
    }
    a() {
        console.log("a", this.name);
        console.log(this.b(), "iniasd");
        // return Keyboard.a();
    }
    b() {
        console.log("b", this.name);
        return "b";
    }
}
exports.default = BaseLaptop;
