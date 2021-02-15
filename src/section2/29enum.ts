export { };

/**
 * 列挙型（enum）で定義すると各要素には番号が振られている
 * ? これって配列と何が違うの？
 */
enum Months {
  a,
  b,
  c,
  d,
  e
}
//これでアクセスできる
console.log(Months.a); //0
Months.b; //1

/**
 * 通常は0から始まるが変更したい場合
 */
enum Months2 {
  a = 1,
  b,
  c,
  d,
  e
}

/**
 * JSでやる場合
 * いちいちksy,valueを書かないといけない
 */
const Monsth = {
  a: 1,
  b: 2,
  c: 3
};

/**
 * cssなどでよく使われるカラーなどを定義することもできる
 */
enum COLORS {
  RED = '#FF000',
  WHITE = '#FFFFF',
  GREEN = '#008008',
  BLACK = '#00000'
}

let green = COLORS.GREEN;
console.log({ green });

// 追加する場合
enum COLORS {
  YELLOW = '#FFF00'
}
COLORS.YELLOW;
// COLORS.GREY; //定義していないものにアクセスするとエラーが出る


enum Abc {
  a,
  b,
  c,
  d,
  e
}
console.log(Abc);
