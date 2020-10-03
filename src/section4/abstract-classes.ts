export {};

//抽象メソッドは抽象クラス内で書かなければならない
abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return `ガオー！！`;
  }
}

class Dog extends Animal {
  cry() {
    return 'ワンワン';
  }
}
