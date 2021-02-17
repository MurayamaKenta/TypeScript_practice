export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "kenta",
  age: 25,
};

me.age++; //26
console.log(me);

//ReadOnlyにすることができる
type PersonalDataType = Readonly<Profile>;
//Reaonlyを編集して独自の型を作ることができる
type YomotoriSenyou<T> = { readonly [P in keyof T]: T[P] };
type PersonalDataType2 = YomotoriSenyou<Profile>;
// type PersonalDataType2 = {
//   readonly name: string;
//   readonly age: number;
// };
