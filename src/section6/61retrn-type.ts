export {};

//関数型の戻り値の型を取得する
const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(1, 3));

type ReturnTypeFormAdd = ReturnType<typeof add>;
