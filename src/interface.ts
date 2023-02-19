interface Laptop {
  username: string;
  password: string;
  on(): void;
  off(): void;
}

class Login implements Laptop {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  on(): void {
    console.log("Method implemented.");
    // throw new Error("Method implemented.");
  }
  off() {
    console.log("Method not implemented.");
    // return { status: false, error: "Method not implemented." };
    // throw new Error("Method not implemented.");
  }

  login(): string | object {
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

class Register implements Laptop {
  username: string;
  password: string;
  address: string;
  email: string;

  constructor(
    username: string,
    password: string,
    address: string,
    email: string
  ) {
    this.username = username;
    this.password = password;
    this.address = address;
    this.email = email;
  }

  on(): void {
    console.log("Method implemented.");
    // throw new Error("Method implemented.");
  }
  off(): void {
    console.log("Method not implemented.");

    // throw new Error("Method not implemented.");
  }
}
