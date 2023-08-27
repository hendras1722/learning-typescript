"use strict";
// import { Modeule } from "./moduel";
// //string
// let nama: string;
// nama = "Barito";
// // number
// let age: number = 0;
// age = 12;
// // Boolean
// let isMarried: boolean;
// isMarried = true;
// // any
// let heroes: any = "wewe";
// heroes = "12";
// // union
// let phone: number | string;
// phone = "08121333232";
// phone = 1249214124;
// let arr: Array<Modeule> = [
//   {
//     id: 1,
//     title:
//       "How to Internationalize a React Application Using i18next and Hygraph",
//     excert:
//       "In this post, we will take a deep dive into how to internationalize a React Application using i18next and Hygraph",
//     postUrl: "https://hygraph.com/blog/react-internationalization",
//     cover: {
//       url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//     },
//     datePublished: "2020-01-01",
//     author: {
//       profilePicture: {
//         url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
//       },
//     },
//   },
// ];
// console.log(arr, "iniarr");
// type getUser = {
//   id: number;
//   fullName: string;
//   isActive: boolean;
// };
// type TypeGetActive = (users: getUser) => boolean;
// const getUser: ResponseType<TypeGetActive> = false;
// console.log(getUser, "iniuser");
// interface Datas<T> {
//   data: T;
// }
// interface DatasIni {
//   name: string;
//   age: number;
// }
// const datasAge: Datas<DatasIni> = {
//   data: {
//     name: "hello",
//     age: 12,
//   },
// };
// type Add = (x: number, y: number) => number;
// function add(...[x, y]: Parameters<Add>): ReturnType<Add> {
//   return x + y;
// }
// console.log(add(2, 1));
// interface ResponseApi<T> {
//   success: string;
//   message: string;
//   data: T;
// }
// function getObjProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//   console.log(obj[key], "iniobj");
//   return obj[key];
// }
// let x = {
//   name: "Ben",
//   address: "New York",
//   phone: 7245624534534,
//   admin: false,
// };
// console.log(getObjProperty(x, "name"));
// console.log(getObjProperty(x, "admin"));
// const id = <T>(x: T): T => x;
// console.log(id(typeof "hello"));
// type Success = "Success" | "Error";
// type code = 200 | 400 | 500;
// interface Data<T> {
//   success: Success;
//   code: code;
//   data: T;
// }
// interface DatasSIN {
//   id: number;
//   name: string | null;
// }
// let getResponse: Data<DatasSIN[]> = {
//   success: "Success",
//   code: 200,
//   data: [
//     {
//       id: 0,
//       name: null,
//     },
//   ],
// };
// console.log(getResponse, "inigetresponse");
// interface ObjInterface {
//   name: string;
//   age: number;
// }
// let obj: ObjInterface = {
//   name: "hello world",
//   age: 12,
// };
// let i: keyof ObjInterface;
// for (i in obj) {
//   console.log(obj, i);
// }
// let array: ObjInterface = {
//   name: "woii",
//   age: 30,
// };
// interface ObjInterface {
//   name: string;
//   age: number;
// }
// let k: keyof ObjInterface;
// for (k in array) {
//   console.log(array, k);
// }
// type Datas = {
//   name: Uncapitalize<string>;
//   age: number;
// };
// let myName: Required<Datas> = {
//   name: "hello Wor",
//   age: 30,
// };
// type C = Awaited<boolean | Promise<void>>;
// let fetchs = async (): Promise<C> => {
//   await fetch("www.google.com").then((res) => console.log(res));
// };
// interface Todo {
//   title: string;
//   description: string;
// }
// function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
//   return { ...todo, ...fieldsToUpdate };
// }
// const todo1 = {
//   title: "organize desk",
//   description: "clear clutter",
// };
// const todo2 = updateTodo(todo1, {
//   description: "throw out trash",
// });
// console.log(todo2);
// type UserNya = {
//   firstName: string;
//   lastName: string;
// };
// let firstUser: Partial<UserNya> = { firstName: "John" };
// console.log(firstUser, "iniuser");
// interface Details {
//   name: string;
//   phonenumber: number;
//   IsActive: boolean;
// }
// let partialDetails: Partial<Details> = { IsActive: false };
// console.log(partialDetails);
// type SuccessNyaAPI = "Success" | "Error";
// type dataNyaAPI = Array<{}>;
// interface APInyaItu<T, I> {
//   success: T;
//   data: I;
// }
// let i: APInyaItu<SuccessNyaAPI, dataNyaAPI> = {
//   success: "Success",
//   data: [{ name: "hello world", age: "wewe" }],
// };
// console.log(i);
