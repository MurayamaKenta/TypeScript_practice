export {};

//staticにより静的メンバーになる
class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'kenta';
  static lastName: string = 'murayama';

  static work() {
    // return `Hey, this is static work method: ${firstName}`;//static変数を呼び出すのに初期宣言の変数ではアクセスできない
    return `Hey, this is static work method: ${Me.firstName}`; //下と同じ意味だが流用性のあるコードにする為thisにした方がいい
    return `Hey, this is static work method: ${this.firstName}`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);

console.log(Me.isProgrammer); //静的メンバーへのアクセスにはクラス(インスタンスからでは無く)からアクセスする
console.log(Me.work());
