export { };

// /**
//  * 例外を起こす関数には「never」型を付ける->基本的に覚えるもの
//  * @param messege エラーメッセージ内容が入っている
//  */
// const error = (messege: string): never => {
//   throw new Error(messege);
// };

// try {
//   let result = error('test');
//   console.log(result);
// } catch (error) {
//   console.log(error);
// }

// let foo: void = undefined;
// // let foo2: never = undefined;//値を定義できない。


function a(mes: string) {
  throw new Error(mes);
}

try {
  let b = a('test')
  console.log(b);

} catch (error) {
  console.log(error);
}




