export {};
//関数のアノテーションは引数と戻り値

function bmi(height: number, weight: number): number {
  return weight / (height * height);
}

console.log(bmi(1.72, 65));
