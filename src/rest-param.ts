export {};

// const sum = (...val) => {
//   console.log(val);
// };

// console.log(sum(1, 2, 3, 4, 5));

// const sum2: (...val: number[]) => void = (...val: number[]) => {
//   console.log(val);
// };

// sum2(1, 2, 3, 4, 5);

const arr = [1, 2, 3, 4];
const reducer = (accumulator: number, currentValue: number) => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

arr.reduce(reducer);

const sum3: (...val: number[]) => void = (...val: number[]) => {
  return val.reduce(reducer);
  // console.log(val);
};
console.log(sum3(1, 2, 3, 4, 5));

// const arr = [{ x: 1, y: 2 }, { a: 'kenta', b: 'kazuki' }];
// const sample = arr.reduce((acc: any, cur: any) => {
//   console.log({ acc, cur });
//   return { ...acc, ...cur };
// }, {});

// console.log(sample);
