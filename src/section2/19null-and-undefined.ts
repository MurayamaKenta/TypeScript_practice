export {};

/**
 * 「null & undefined」を代入しても型推論はany型が表示される
 * 型を明示的に書かなければならない
 */
let absence = null; //any
let absence2: null = null; //null

let data = undefined; //any
let data2: undefined = undefined; //undefined
