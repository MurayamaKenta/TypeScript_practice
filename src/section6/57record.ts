export {};

//Record<K , T>
type Prefectures = "Tokyo" | "Chiba" | "Okinawa";

//県ごとのコロナ感染数の管理
type Covid19Info = {
  kanji_name: string;
  confirmed_cases: number;
};

//一つ一つ同じ型を定義するのは冗長
// const covid19Japan02: {
//   Tokyo: Covid19Info;
//   Chiba: Covid19Info;
//   Okinawa: Covid19Info;
// } = {
//   Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
//   Chiba: { kanji_name: "千葉", confirmed_cases: 500 },
//   Okinawa: { kanji_name: "沖縄", confirmed_cases: 20 },
// };

//!Record型を使うことでまとめることができる
//オブジェクトを追加する場合にはPrefectures, Covid19Infoに追加したら良いためメンテナンスが簡単
//Record<キーの型定義, 値の型定義>
//今回の場合Tokyoの型定義はCovid19Infoになる。そのためkanji_name, confirmed_casesプロパティが必要
const covid19Japan: Record<Prefectures, Covid19Info> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 2000 },
  Chiba: { kanji_name: "千葉", confirmed_cases: 500 },
  Okinawa: { kanji_name: "沖縄", confirmed_cases: 20 },
};

// type a = "a" | "b" | "c";
// type b = a | "d" | "e";

// const c: Record<b, a> = {
//   a: "b",
//   b: "c",
//   c: "a",
//   d: "a",
//   e: "a",
// };
