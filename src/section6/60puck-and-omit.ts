export {};

type DetailProfile = {
  name: string;
  height: number;
  weight: number;
};

//欲しいものの選択 Pick
type Pick<T, K extends keyof T> = { [P in K]: T[P] };

type SimpleProfile = Pick<DetailProfile, "name" | "weight">;

//いらないものの選択 Omit
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type SmallProfile = Omit<DetailProfile, "height">;

// ============================================
//拡張してみる
type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, "height">>;
type MySmallProfile = MyOmit<DetailProfile, "height">;

type MyOmit2<T> = Pick<T, Exclude<keyof T, "height">>;
type MySmallProfile2 = MyOmit2<DetailProfile>;

type MyOmit3 = Pick<
  DetailProfile,
  Exclude<"name" | "height" | "weight", "height">
>;
type MySmallProfile3 = MyOmit3;

type MyOmit4 = Pick<DetailProfile, "name" | "weight">;
type MySmallProfile4 = MyOmit4;
