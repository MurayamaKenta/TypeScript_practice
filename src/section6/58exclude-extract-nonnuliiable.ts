export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;
//!Exclude 第一引数から第二引数を抜いたものを生成してくれる
type FunctionType = Exclude<SomeTypes, string | number>; //void
type NumFunctionType = Exclude<SomeTypes, DebugType>; //string|number
//Function(組み込み型定義)
//個別の指定しいた型を除外するのではなく、関数の型を全て除外することができる
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
//! Extract除外ではなく第二引数の型だけを取り出す
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>; //void
//!NonNullable null / undefinedを除外した型を生成する
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
