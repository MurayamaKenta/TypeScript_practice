export { };

/**
 * ①
 *objectのみで型定義(アノテーション)をするのは制限が甘いためあまり良くない
 */
let profile1: object = { name: 'Kenta' };
profile1 = { age: 24 };

/**
 * ②
 * {}でも①のオブジェクトと同義
 * プロパティの型宣言がされていない為、再代入で違うものを代入可能
 */
let profile2: {} = { name: 'kenta' };
profile2 = { age: 24 };

/**
 * ③
 * ②の書き方をするとオブジェクトのプロパティにも型宣言ができる
 * 宣言されていないプロパティを再代入しようとした際にはエラーが起こる
 * ! ①の定義方法は非推奨。any型を宣言している状態とあまり変わらない。出来るだけ型を制限していくことが大事
 */
let profile3: { name: string } = { name: 'kenta' };
// profile3 = { age: 24 };//定義していないプロパティのため再代入不可



let a: object = { name: 'kenta' }
a = { age: 34 }
console.log(a);

