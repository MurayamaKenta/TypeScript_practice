export {};

//クラスのextendsでは1つのクラスしか継承ができない
//interfacesを使うことでメソッドの実装漏れや、継承をすることができる
class Mahoutsukai {}
class Souryo {}

class Taro extends Mahoutsukai {}

interface Kenja {
  mahou(): void; //シグネチャー（型のみを定義したもの）
}
interface Senshi {
  kougeki(): void;
}

class Jiro implements Kenja, Senshi {
  mahou(): void {
    console.log('mohou');
  }
  kougeki(): void {
    console.log('kougeki');
  }
}

const jiro = new Jiro();
jiro.mahou();
jiro.kougeki();
