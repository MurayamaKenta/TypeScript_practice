export { };

let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

// console.log(bmi(1.73, 65));

/**
 * ②
 * 指定した引数が全てセットされていなければエラーになる
 */
let bmi2: (height: number, weight: number, flag: boolean) => number = (
  height: number,
  weight: number,
  flag: boolean
): number => weight / (height * height);

// console.log(bmi2(1.73, 65));

/**
 * ③
 * ②でエラーになっていたものが「?」 を付けることで引数が無くても許容されるようになる
 * javascriptでは引数が足りない場合にはundefinedが割り振られるためにエラーになる
 */
let bmi3: (height: number, weight: number, flag?: boolean) => number = (
  height: number,
  weight: number,
  flag?: boolean
): number => {
  const bmi: number = weight / (height * height);
  if (flag) {
    console.log({ bmi });
  }
  return bmi;
};

bmi3(1.73, 65);
bmi3(1.73, 65, false);
bmi3(1.73, 65, true);
