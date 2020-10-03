export {};

let bmi = function(height: number, weight: number): number {
  return weight / (height * height);
};

console.log(bmi(1.73, 65));

//関数自体(bmi2)にもアノテーションすることが可能
let bmi2: (height: number, weight: number) => number = function(
  height: number,
  weight: number
): number {
  return weight / (height * height);
};
