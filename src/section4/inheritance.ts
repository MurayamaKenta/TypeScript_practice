export {};
//継承

/**
 * ただの継承
 */
// class Animal {
//   run(): string {
//     return 'I can tun';
//   }
// }

// class Lion extends Animal {
//   run(): string {
//     return 'I can run : Lion';
//   }
// }

// let animal = new Animal();
// console.log(animal.run());
// let lion = new Lion();
// console.log(lion.run());

/**
 *
 */
class Animal2 {
  constructor(public name: string) {}
  run(): string {
    return 'I can tun';
  }
}

class Lion2 extends Animal2 {
  public speed: number;
  constructor(name: string, speed: number) {
    super(name);
    this.speed = speed;
  }
  run(): string {
    const parentMessage = super.run();
    console.log({ parentMessage });
    return `${parentMessage} : ${this.speed}km/h`;
  }
}

let animal2 = new Animal2('ミッキー');
console.log(animal2.run());

let lion2 = new Lion2('シンバ', 100);
console.log(lion2.run());
