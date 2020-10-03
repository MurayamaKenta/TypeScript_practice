export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;

//! typeofを使って型を確定させてから処理をすること = 「型ガード」と言う。
if (typeof numberUnknown === 'number') {
  let sunUnknown = numberUnknown + 10;
}
