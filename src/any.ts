import axios from 'axios';
export {};
//any型はどの方が帰ってきているのか分からない状態->apiは何が返ってきているのか分からない
//anyは非推奨->まだ型が決まっていない時や一時的に定義するときのみ使用するようにする

let url: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//todo ①
// axios.get(url).then(function(res) {
//   let data: object[]; //object型の場合,オブジェクトの中身が空でもエラーにならない->よろしくない。
//   data = res.data;
//   console.log(data);
// });

//todo ②
/**
 * 漠然とオブジェクトである！と定義するのではなく、そのオブジェクトが持つ要素を書くことができる
 */
axios.get(url).then(function(res) {
  // Articlesを定義することでapiが持っているプロパティ一つ一つに型宣言をすることができる
  interface Articles {
    id: number;
    title: string;
    description: string;
  }

  let data: Articles[];
  data = res.data;
  data = [
    {
      id: 1,
      title: 'title',
      description: 'description'
    }
  ];
  console.log(data);
});
