export {};
//===========
//constアサーション
//===========
let name = 'kenta';
name = 'Kazuki';

//constアサーション->定数のような扱いができる
//name2の型はKentaになっている
let name2 = 'Kenta' as const;

// name2 = 'Kazuki';//Kenta型の為、他の文字列の代入は不可

//オブジェクトでも使用可能
//現状書き換え可能
let profile = {
  name: 'kenta',
  age: 25
};
profile.name = 'Kazuki';

//再代入などをさせたくない場合
let profile2 = {
  name: 'kenta',
  age: 25
} as const;
// profile2.name = 'Kazuki';//read onlyのプロパティになっている。いちいち「readonly」を付与する必要がない
