//グローバル空間に宣言しないようにするため、モジュールシステムする必要はある。
//そのためexport{}が必要になる
export {};
let name = 'TypeScript'; //export{}がない場合エラーになる

let isFinished: Boolean = true;
isFinished = false;
console.log({ isFinished });
