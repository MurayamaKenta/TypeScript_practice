export {};

/**
 * readonlyだけで同じ挙動だが、publicなどのアクセス修飾子はつけていた方が優しい。
 * 読み込みは可能な為protectedとはまた別のもの
 */
class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('ハムさん');
console.log(myVisaCard.owner);
// myVisaCard.owner = 'kenta';//読み込みのみ可能な為代入時にエラーが起きる
