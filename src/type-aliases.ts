export {};

/**
 * ①
 * エイリアスの命名は先頭が大文字
 */
type Mojiretsu = string;

const fooString: string = 'Hello';
const fooString2: Mojiretsu = 'Hello'; //↑と同義

/**
 * ②
 * オブジェクトのプロパティなどの型宣言をする際に使い回しすることが可能になる->他にも使えるはずだが一旦保留
 */
const example1 = {
  name: 'kemta',
  age: 24
};

//todo 型宣言のエイリアスを定義方法
// ①
// 合理的でない為、非推奨-> いちいち直打ちは間違いが起こる可能性がある＆めんどくさい＆型が変わった場合に変更箇所が多くなる
type Profile = {
  name: string;
  age: number;
};
// ②
// example1の型の構造を読み込むことができる
// example1の型がもし変わった際も変更しないで済む
type Profile2 = typeof example1;
//todo-------------------

const example2: { name: string; age: number } = {
  name: 'kenta',
  age: 24
};
//エイリアスを定義しておくことでexample2の文をこの書き方にすることができる
const example3: Profile = {
  name: 'kenta',
  age: 24
};
