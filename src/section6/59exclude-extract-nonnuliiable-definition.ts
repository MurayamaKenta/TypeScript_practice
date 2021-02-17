export {};
//!Excludeの処理を変更して使う
type MyExclude<T> = T extends string | number ? never : T;

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//!Exclude 第一引数から第二引数を抜いたものを生成してくれる
type FunctionType = MyExclude<SomeTypes>; //void

//! Extract除外ではなく第二引数の型だけを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; //void
//!NonNullable null / undefinedを除外した型を生成する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
