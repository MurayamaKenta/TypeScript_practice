export {};

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);

fooCompatible = barCompatible; //any型には別の型を代入可能

console.log(typeof barCompatible);

let fooIncompatible: string;
let barIncompatible: number;

// fooIncompatible = barIncompatible//型が違うために代入不可

let fooString: string;
let barString: string = 'string';

fooString = barString; //同じ型なので代入可能

let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

//オブジェクト間の型の互換性
//各の方が一致しているかは判定していない
//代入されるオブジェクトの内部で持つメンバーに代入する側のオブジェクトでも存在するか？その型が合っているか？
interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(25, 'kenta');
console.log({ me });
