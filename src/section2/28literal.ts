export { };

/**
 * ①
 * dayOfTheWeekには「日〜土」までしか入らないで欲しい。
 * しかし他の文字列などが入ってくることが可能
 */
let dayOfTheWeek: string = '日';
dayOfTheWeek = '月';
dayOfTheWeek = '31';

/**
 * todo ② string
 * アノテーション（型定義）に自分で決めた物を入れることが可能->この場合この指定した物以外が入ってきた際にエラーになる
 * [|]で繋げているのでunion型になるのかな？
 * 漠然とstring型にするのではなくさらに狭めていくことができる
 */
let dayOfTheWeek2: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';
dayOfTheWeek2 = '月';
// dayOfTheWeek2 = '31'; //エラー

/**
 * todo ③ number
 * numberなども同様に可能
 *
 *
 */
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1;
month = 12;
// month = 20; //エラー




