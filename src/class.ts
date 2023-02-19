export class User {
  /**
   * name
   */
  constructor(public name: string, public age: number) {
    // this.name = name;
  }
  //   public name: string;
}

let user = new User("muhammad", 21);
console.log(user, "iniser");

// admin

class Admin extends User {
  read: Boolean = true;
  write: Boolean = true;
  phone: string;
  private _email: string = "";

  static getRoleName: string = "Admin";

  constructor(phone: string, name: string, age: number) {
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return "woiii";
  }

  getRole(): { read: Boolean; write: Boolean } {
    return { read: this.read, write: this.write };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "email salah";
      return;
    }
    this._email = value;
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("081213123", "MSA", 25);

// admin.email = "m@l"
// console.log(admin);

let admin = Admin.getNameRole();
console.log(admin);
