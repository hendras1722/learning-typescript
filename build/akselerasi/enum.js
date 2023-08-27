"use strict";
// enum God {
//   API_DETAIL = "hello",
// }
// const res = "hello" === God.API_DETAIL;
// console.log(res);
// type GodType = "hello";
// const resi: GodType = "hello";
// console.log(resi);
class Drive {
    constructor(model, type) {
        this.model = model;
        this.type = type;
    }
    drive() {
        console.log("drive");
    }
}
class Cars extends Drive {
    constructor(model, type) {
        super(model, type);
        this._stir = false;
    }
    set stir(value) {
        this._stir = value;
    }
    get stir() {
        return this._stir;
    }
}
let newClass = new Drive("Carvia", "MX228");
newClass.drive();
let newClassw = new Cars("Carvia", "MX228");
newClassw.stir = true;
console.log(newClassw);
