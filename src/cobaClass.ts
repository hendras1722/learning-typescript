// class Person {
//   public name: string;
//   public age: number;
//   public address: string;
//   public phone: string;

//   constructor(name: string, age: number, address: string, phone: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.phone = phone;
//   }
// }

// interface IPerson {
//   name: string;
//   age: number;
//   address: string;
//   phone: string;
// }

// type Persona = {
//   name: string;
//   age: number;
//   address: string;
//   phone: string;
// };

// // implements tanpa super
// // implements bisa memakai interface dan type

// class Hendra implements Persona {
//   name: string;
//   age: number;
//   address: string;
//   phone: string;
//   constructor(name: string, age: number, address: string, phone: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.phone = phone;
//   }
// }

// // class pakai super
// // class tidak bisa memakai interface dan type

// class Joni extends Person {
//   name: string;
//   age: number Html;
//   address: string;
//   phone: string;
//   constructor(name: string, age: number, address: string, phone: string) {
//     super(name, age, address, phone);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.phone = phone;
//   }
// }

// const Hendras = new Hendra("Hendra", 12, "wewe", "08515");
// // const Jonis = new Joni();
// // Jonis.name = "Jonis";
// // console.log(Hendras, Jonis);
// // let name: Persona = "hello";
// // console.log(name);

// interface AppProps {
//   name: string;
//   age: string;
// }

// const UserProps: AppProps = {
//   name: "Jhon",
//   age: "123",
// };
// console.log(UserProps);

// let;

function isNumber(x: any): number {
  return typeof x === "number";
}

console.log(isNumber(2));
