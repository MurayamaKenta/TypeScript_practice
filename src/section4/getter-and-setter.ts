export {};

/**
 * owner--------------
 * 所有者
 * 初期化時に設定できる
 * 途中で変更できない
 * 参照できる
 * secretNumber--------
 * 個人番号
 * 初期化できる
 * 途中で変更できる
 * 参照できない
 */
class MyNumberCard {
  private owner: string;
  private secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this.owner = owner;
    this.secretNumber = secretNumber;
  }

  get getOwner() {
    return this.owner;
  }
  set setSecretNumber(secretNumber: number) {
    this.secretNumber = secretNumber;
  }
  debugPrint() {
    return `secretNumber:${this.secretNumber}`;
  }
  // get getSecretNumber() {
  //   return this.secretNumber;
  // }
}

let card = new MyNumberCard('ハムさん', 1234567889);
// card.getOwner = 'KENTA';//代入はできない
console.log(card.getOwner);
console.log(card.debugPrint());
// console.log(card.getSecretNumber);
card.setSecretNumber = 987654321;
console.log(card.debugPrint());
// console.log(card.getSecretNumber);
// console.log(card.debugPrint());
