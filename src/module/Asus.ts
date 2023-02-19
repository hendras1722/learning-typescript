import BaseLaptop from "./BaseLaptop";

class Asus<T> extends BaseLaptop<T> {
  constructor(type: T, numeric: boolean, TouchButton: boolean) {
    super("Asus", type, numeric, TouchButton);
  }
}

export default Asus;
