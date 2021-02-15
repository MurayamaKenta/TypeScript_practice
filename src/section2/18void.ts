export { };

/**
 * ①
 * 返り値のないシンプル関数
 */
const returnNoting = () => {
  console.log('何も返さない');
};
// console.log(returnNoting()); //undefind -> 関数にreturnがないため。

/**
 * ②
 * 型宣言で「undefined」を使用する場合にはreturnでundefinedを明示的に書かなければ使えない
 */
const returnNoting2 = (): undefined => {
  console.log('何も返さない');
  return;
};

/**
 * ③
 * 返り値がないことを期待する型が「void」->明示的にundefinedを返す必要がない
 */
const returnNoting3 = (): void => {
  console.log('何も返さない');
};