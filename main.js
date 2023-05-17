"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
// let msg="hi Ragul"
// console.log(msg);
// let a:any=123;
// a=1;
// a='abc';
// let b:number=111.222
// let c:string="hello";
// let d:boolean=false;
// let e:null=null;
// let f:undefined;
// let arr=[1,2,3,4,5,6,'abc'];
// let arrstr:string[]=['ragul','netha','abc']
// let multitype:number|string;
// multitype=7;
// multitype='Barani';
// let obj={
//     name:"Ragul",
//     age:22
// }
//  function sum(a:number,b:number):number{
//       return a+b;
//  }
// function changecase(a){
//     a.toLowerCase();
// }
// function changecase2(a:string,b?:string):string{
//     if(b)
//     return a.toLowerCase()+b;
//   return   a.toLowerCase();
// }
// console.log(changecase2("barani"));
// function changecase3(a:string,b:string="Ragul"){
//     // if(b)
//     return a.toLowerCase()+b;
// //   return   a.toLowerCase()+b;
// }
// console.log(changecase3("barani"));
// function add(point:{x:number,y:number}){
//     return point.x+point.y;
// }
// let p={
// x:10,
// y:1
// }
// console.log(add(p));
// interface Point{
//     x:number;
//     y:number;
//     z?:number;
// }
// function add2(point:Point){
//     return point.x+point.y;
// }
// console.log(add2({x:10,y:20}));
// let age:number=20;
// if(age>=18){
//     console.log("eligible");
// }else{
//     console.log("not eligible");
// }
// class Greeter{
//     greeting: string;
//     constructor(message: string){
//         this.greeting=message;
//     }
//     greet(){
//         return "hello.."+this.greeting;
//     }
// }
// let message=new Greeter("Ragul");
// console.log(message.greet());
// class car{
//     engine:string;
//  constructor(engine:string){
//     this.engine=engine;
//  }
//  start(){
//     return "Started" +this.engine;
//  }
//  stop(){
//     return "Stopped" +this.engine;
//  }
// }
// let car1=new car('audi');
// console.log(car1.start());
// console.log(car1.stop());
// let car2=new car('swift');
// console.log(car2.start());
// console.log(car2.stop());
// class car{
//    constructor(public engine:string){}
//    start(){
//     return "Started " +this.engine;
//  }
//  stop(){
//     return "Stopped " +this.engine;
//  }
// }
// let car1=new car('audi');
// console.log(car1.start());
//  console.log(car1.stop());
//  let car2=new car('swift');
//  console.log(car2.start());
//  console.log(car2.stop());
// class car{
//     private _engine: string;
//     constructor(engine: string){
//         this.engine=engine;
//         console.log(this.engine);       
//     }
//     get engine():string{
//         console.log("inside get");
//         return this._engine;
//     }
//     set engine(value:string){
//         console.log("inside set")
//      if(value == undefined)throw 'supply an engine!'
//      this._engine=value;
//     }
// }
// let car1=new car('audi');
// console.log(car1.engine="swift");
// class Engine{
//     constructor(public power:number,public enginetype:string)  {
//     }     
// }
// class Auto{
//     engine:Engine;
//     constructor(engine:Engine){
//         this.engine=engine;
//         console.log(this.engine)
//     }
// }
// class Truck extends Auto{
//     fourByFour: boolean;
//     constructor(engine:Engine,fourByFour:boolean){
//         super(engine);
//         this.fourByFour=fourByFour;
//         console.log(fourByFour);
//     }
// }
// let e=new Engine(300,'mbs');
// let t=new Truck(e,true);
// interface Action{
//     start(message:string);
//     stop(message:string);
// }
// class Car implements Action{
//     constructor(public engine:string){
//         this.engine=engine;
//     }
//     start(message:string){
//         // console.log(this.engine +message);
//          return this.engine +message
//     }
//     stop(message:string){
//         console.log(this.engine +message);
//         // return this.engine +message
//     }
// }
// var p=new Car("Ragul")
// // p.start("hii")
// p.stop("bye")
// console.log(p.start("barani"))
// //  console.log(p.stop("bye"));
// interface User {
//     id: number;
//     name: string;
//     email: string;
//   }
//   class UserManagement {
//     private users: User[];
//     constructor() {
//       this.users = [
//         { id: 1, name: "John Doe", email: "john@example.com" },
//         { id: 2, name: "Jane Smith", email: "jane@example.com" },
//         { id: 3, name: "Bob Johnson", email: "bob@example.com" }
//       ];
//     }
//     getAllUsers(): User[] {
//       return this.users;
//     }
//     getUserById(id: number): User | undefined {
//       return this.users.find(user => user.id === id);
//     }
//     insertUser(user: User): void {
//       this.users.push(user);
//     }
//     editUser(id: number, updatedUser: Partial<User>): void {
//       const user = this.users.find(user => user.id === id);
//       if (user) {
//         Object.assign(user, updatedUser);
//       }
//     }
//   }
//   // Example usage:
//   const userManagement = new UserManagement();
//   console.log("All Users:", userManagement.getAllUsers());
//   const newUser: User = { id: 4, name: "Alice Brown", email: "alice@example.com" };
//   userManagement.insertUser(newUser);
//   console.log("All Users after Insert:", userManagement.getAllUsers());
//   const userToEditId = 2;
//   const updatedUserInfo = { name: "Jane Smithson", email: "jane.smithson@example.com" };
//   userManagement.editUser(userToEditId, updatedUserInfo);
//   console.log("All Users after Edit:", userManagement.getAllUsers());
//   const userById = userManagement.getUserById(3);
//   console.log("User by ID:", userById);
// class StudentDb {
//     constructor(public id: number, public name: string, public age: number) { }
// }
// let p=new StudentDb(1, 'Ragul', 22);
// interface IStudent {
//     create();
// }
// class Student implements IStudent {
//     constructor(public student: StudentDb) { }
//     create() {
//         console.log(this.student);
//     }
// }
// let s1 = new Student(p);
// s1.create();
// let s2 = new Student(new StudentDb(2, 'nethaji', 23));
// s2.create();
// class IStudent {
//     id: number;
//     name: string;
//     age: number;
//     isActive:boolean;
//   }
//   interface I{
//     getAllUsers();
//   }
//   class Student implements I {
//     users: IStudent[];
//     constructor() {
//       this.users = [
//         { id: 1, name: "Ragul", age: 22,isActive:true },
//         { id: 2, name: " Nethaji", age: 23,isActive:true},
//         { id: 3, name: "Barani", age: 26,isActive:false}
//       ];
//     }
//     getAllUsersFalseAlso(): IStudent[] {
//       return this.users; 
//       }
//     getAllUsers(): IStudent[] {
//       const activeUsers = this.users.filter(user => user.isActive === true);
//       return activeUsers;
//       }
//       getUserById(id: number): IStudent | undefined {
//         return this.users.find(user => user.id === id && user.isActive===true);
//       }
//       insertUser(user: IStudent): void {
//         this.users.push(user);
//       }
//       editUser(id: number, updatedUser: Partial<IStudent>): void {
//         const user = this.users.find(user => user.id === id);
//         if (user) {
//           Object.assign(user, updatedUser);
//         }
//       }
//       deleteUser(id:number): void {
//         const user = this.users.find(user =>
//           {
//             if(user.id === id){
//               user.isActive=false;
//             }
//           } );
//       }
//     }
//   const detail = new Student();
// // const newUser: IStudent= { id: 4, name: "Marudhu", age:22 };
// detail.insertUser({ id: 4, name: "Marudhu.k", age:22,isActive:true });
// detail.insertUser({id:5,name:"kishore",age:23,isActive:true});
// console.log("All Users after Insert:", detail.getAllUsers());
// const userToEditId = 1;
// const updatedUserInfo = {name:"Ragul",age:22};
// detail.editUser(userToEditId, updatedUserInfo);
// console.log("All Users after Edit:", detail.getAllUsers());
// const userById = detail.getUserById(1);
// console.log("User by ID:", userById);
// let deletUserId:number=5;
// detail.deleteUser(deletUserId);
// console.log("All Users after delete:", detail.getAllUsers());
// console.log("All Students:", detail.getAllUsers());
// console.log("getAllUsersFalseAlso",detail.getAllUsersFalseAlso());
// enum Department{
//   Mech,cse,IT,civil,EEE
// }
// console.log(Department.Mech)
// let a={
//   name:"Ragul",
//   age:20,
// }
// let myfun=(obj:object)=> {obj['message']='hi..'
// console.log(obj)
// }
// myfun(a);
var b = {
    name: "nethaji", age: 23
};
var myfun1 = function (obj) {
    return __assign(__assign({}, obj), { greet: 'hi bro' });
};
console.log(myfun1(b));
var bb = myfun1(b);
console.log(bb.name);
// let c = { name: 'kishore', age: 25 };
// // let myfun2 = (obj:object) => {
// let myfun2 = (obj) => {
//  obj.msg = 'i love finstein';
//  return obj;
// };
// console.log(myfun2(c));
