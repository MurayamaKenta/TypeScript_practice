export {};

/**
 * ①
 */
let object = {
  name: 'kenta',
  age: 24
};

/**
 * ②
 * 直書き
 */
let object2: { name: string; age: number } = {
  name: 'kenta',
  age: 24
};

/**
 * ③
 * 型を別に定義
 */
type ObjectType = {
  name: string;
  age: number;
};

let object3: ObjectType = {
  name: 'kenta',
  age: 24
};

/**
 * ④
 * インターフェイス使用
 */
interface ObjectInterface {
  name: string;
  age: number;
}

let object4: ObjectInterface = {
  name: 'kenta',
  age: 24
};
