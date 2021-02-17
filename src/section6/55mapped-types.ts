export {};

type Profile = {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;

//この様にUtililyTypeに変更加えることで独自型を定義することができる
type Options<T> = {
  [P in keyof T]?: T[P] | null;
};
