export {};

/**①
   * 型は別だが処理は同じものを作る場合
   * @param arg
//    */
// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

/**②
 * 型を決まったものでは無く適当な物を入れる(抽象的な型)※「T」を使うことが多い
 * 引数の前に<>をかく
 */
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(123));
console.log(echo<string>('hello!!'));
console.log(echo<boolean>(true));

class Animal<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Animal<number>(12345).echo());
console.log(new Animal<string>('hello1!!!!').echo());
console.log(new Animal<boolean>(true).echo());
