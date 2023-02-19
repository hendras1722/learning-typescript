"use strict";
class Login {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    on() {
        console.log("Method implemented.");
        // throw new Error("Method implemented.");
    }
    off() {
        console.log("Method not implemented.");
        // return { status: false, error: "Method not implemented." };
        // throw new Error("Method not implemented.");
    }
    login() {
        if (this.username && this.password) {
            return {
                username: this.username,
                password: this.password,
            };
        }
        return "failed to login";
    }
}
let login = new Login("HS7999", "wewe");
console.log("login", login.login());
class Register {
    constructor(username, password, address, email) {
        this.username = username;
        this.password = password;
        this.address = address;
        this.email = email;
    }
    on() {
        console.log("Method implemented.");
        // throw new Error("Method implemented.");
    }
    off() {
        console.log("Method not implemented.");
        // throw new Error("Method not implemented.");
    }
}
