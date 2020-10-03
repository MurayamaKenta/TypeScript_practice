export {};

let name: any = 'Kenta';

//左オペランドに手作業で型制御をしている
let length: number = name.length;
console.log(length);
// length = 'foo';

//型アサーションを使用した場合
let length1 = name.length as number;
// length1 = 'foo';

//!さらにいい方法
let length2 = (name as string).length;

//型アサーションのやり方の一つ。だが非推奨->Reactで使うJSXに似ているため
let length4: number = (<string>name).length;
