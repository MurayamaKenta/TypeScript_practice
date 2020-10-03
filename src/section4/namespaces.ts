export {};

/**
 * クラスは同じ名前空間に1つしか存在はできない
 */
// class Person {
//   constructor(public name: string) {}
// }
// class Person {
//   constructor(
//     public firstName: string,
//     public middleName: string,
//     public lastName: string
//   ) {}
// }

// const me = new Person('ハムさん');
// console.log(me.name);

/**②
 * namespaceを使うことで名前の競合を避けることができる
 */
// namespace Japanese {
//   export class Person {
//     //exportをつけることで外からアクセスすることができる
//     constructor(public name: string) {}
//   }
// }
// namespace English {
//   export class Person {
//     constructor(
//       public firstName: string,
//       public middleName: string,
//       public lastName: string
//     ) {}
//     allName() {
//       return `${this.firstName}->${this.middleName}->${this.lastName}`;
//     }
//   }
// }
// const japanPerson = new Japanese.Person('ハムさん');
// console.log(japanPerson.name);
// const englishName = new English.Person('木村', 'J.Y', 'かずき');
// console.log(englishName.allName());

/**
 * ③
 * namespaceの中にnamespaceを置くことは可能！
 */
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      //exportをつけることで外からアクセスすることができる
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      //exportをつけることで外からアクセスすることができる
      constructor(public name: string) {}
    }
  }
}
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
    allName() {
      return `${this.firstName}->${this.middleName}->${this.lastName}`;
    }
  }
}

const Tokyo = new Japanese.Tokyo.Person('ハムさん');
console.log(Tokyo.name);
const Osaka = new Japanese.Tokyo.Person('ハムやん(関西)');
console.log(Osaka.name);
const englishName = new English.Person('木村', 'J.Y', 'かずき');
console.log(englishName.allName());
