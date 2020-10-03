export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const Tanaka: Pitcher1 = {
  throwingSpeed: 155
};

const Ochiai: Batter1 = {
  battingAverage: 0.367
};

/**
 * ②
 * 1から新しい型typeを作っている
 */
type TwoWayPlayer = {
  throwingSpeed: number;
  battingAverage: number;
};

/**
 * ③
 * インターセクション型
 * 既存のtypeを使用して新たな型を作ることが可能
 */
type TwoWayPlayer2 = Pitcher1 & Batter1;

const Otani: TwoWayPlayer2 = {
  throwingSpeed: 165,
  battingAverage: 0.286
};
