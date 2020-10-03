export {};

function double(val: number): number {
  return val * 2;
}

console.log(double(100));

/**
 * 文字列
 * @param val
 */
function double2(val: string): string {
  return val + val;
}

console.log(double2('GO! '));

/**③
 * オーバーロード。同じ関数の名前だが処理が違う（引数、返り値の型が違う）
 * この場合は型が違う為処理することができない。
 * @param val
 */
// Number
// function double3(val: string): string {
//   return val + val;
// }
// // String
// function double3(val: number): number {
//   return val * 2;
// }
// console.log(double3(100));
// console.log(double3('GO!'));

/**④
 * ③ではできない為シグネチャーを定義する
 * 関数の実態ではany型にしているがシグネチャーで定義していない型はエラーが出る.その為number or stringしか入らない
 * @param val
 */

//型だけを定義している
//!シグネチャーと呼ばれる。関数よりも前に定義する
function double4(val: number): number;
function double4(val: string): string;

function double4(val: any): any {
  if (typeof val === 'number') {
    return val * 2;
  } else {
    return val + val;
  }
  // else {
  //   throw 'numberでもstringでもないので、引数の型を確認してください。';
  // }//コンパイル時にエラーが起こる為例外処理をする必要がない
}
console.log(double4(100));
console.log(double4('GO!'));
// console.log(double4(false));//シグネチャーで定義した以外の型が入るとコンパイル時にエラーになる
