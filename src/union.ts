export {};
// union型は欲張りな型

/**
 * number型にstringを入れているのでエラー
 *
 */
let value = 1;
// value = 'foo';

/**
 *union型
 *「|」で繋げることでいくつかの型を入れることが可能になる。「or」みたいな意味合い
 * !union型は多く使われるので覚えよう！！
 */
let value2: number | string = 1;
value2 = 'foo';
