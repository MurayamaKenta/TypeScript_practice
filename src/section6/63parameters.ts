export {};

//Parameters<T>は関数の引数の型を取得する
const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("kenta", 24);

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["kenta", 12345];
