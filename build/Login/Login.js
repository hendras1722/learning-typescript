"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    Login() {
        if (this.username && this.password) {
            return "Login";
        }
        else {
            return this.failed();
        }
    }
    failed() {
        console.log("failed login");
        return "failed Login";
    }
}
let login = new Login("asd", "hello");
console.log(login["username"]);
console.log("login", login.Login());
