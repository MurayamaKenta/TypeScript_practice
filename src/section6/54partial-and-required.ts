export {};

type Profile = {
  name: string;
  age: number;
};
//undefinedを許容するパターンを作りたい時にこのやり方はやらない
//拡張性がない。元の型が増えたらコピー側も増やさなと行けないため
// type Profile2 = {
//   name?: string;
//   age?: number;
// };

//! 1Partial型を使うことで<>の中の型定義をオプショナル（undefinedもOK）にしてコピーしてくれる
type PartialType = Partial<Profile>;

// ---------------------
// 全てが必要な型にしたい場合。オプショナルをなくす
type Profile2 = {
  name?: string;
  age: number;
  code: number;
};
//Requiredタイプをつけることで可能になる
type RequiredType = Required<Profile2>;
