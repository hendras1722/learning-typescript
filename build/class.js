"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    /**
     * name
     */
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
    }
}
exports.User = User;
let user = new User("muhammad", 21);
console.log(user, "iniser");
// admin
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "woiii";
    }
    getRole() {
        return { read: this.read, write: this.write };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "email salah";
            return;
        }
        this._email = value;
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
// let admin = new Admin("081213123", "MSA", 25);
// admin.email = "m@l"
// console.log(admin);
let admin = Admin.getNameRole();
console.log(admin);
