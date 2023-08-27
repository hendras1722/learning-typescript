// enum God {
//   API_DETAIL = "hello",
// }

// const res = "hello" === God.API_DETAIL;
// console.log(res);
// type GodType = "hello";
// const resi: GodType = "hello";
// console.log(resi);

class Drive {
  model: string;
  type: string;
  constructor(model: string, type: string) {
    this.model = model;
    this.type = type;
  }

  drive() {
    console.log("drive");
  }
}

class Cars extends Drive {
  private _stir: boolean = false;
  constructor(model: string, type: string) {
    super(model, type);
  }
  set stir(value: boolean) {
    this._stir = value;
  }
  get stir(): boolean {
    return this._stir;
  }
}
let newClass = new Drive("Carvia", "MX228");
newClass.drive();

let newClassw = new Cars("Carvia", "MX228");
newClassw.stir = true;
console.log(newClassw);
