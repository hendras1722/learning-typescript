import { ILaptop } from "./ILaptop";
import * as Keyboard from "./Keyboard";

// base laptop diclass lain memakai abstract
// digunakan untuk didalam kelas

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: Boolean;
  withTouchButton: Boolean;
  constructor(
    name: string,
    type: T,
    withNumeric: Boolean,
    withTouchButton: Boolean
  ) {
    this.name = name;
    this.type = type;
    this.withNumeric = withNumeric;
    this.withTouchButton = withTouchButton;
  }

  a(): void {
    console.log("a", this.name);
    console.log(this.b(), "iniasd");
    // return Keyboard.a();
  }
  b() {
    console.log("b", this.name);
    return "b";
  }
}

export default BaseLaptop;
