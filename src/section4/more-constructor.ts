export {};

/**①通常のクラス構文
 *
 */
// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const me = new Person('ハムさん', 43);
// console.log(me);

/**②
 * constructorの引数にアクセス修飾子を書くことで①と同じように（初期化）使うことができる
 */
class Person2 {
  constructor(public name: string, protected age: number) {}
}

const me2 = new Person2('ハムさん', 43);
console.log(me2);
