// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "movingrock"];

// 제너릭 방식
let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

let doubleArr2: (number | string | (number | string)[])[][] = [
  [1, 2, [1, 2, 3]],
  [4, "hello"],
];

let doubleArr3: (number | string | (number | string | (number | string)[])[])[][] = [
  [1, 2, [1, 2, ["bye"]]],
  [4, "hello"],
];

// 튜플
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 2, 3];

let tup2: [number, string, boolean] = [1, "2", true];

// js에서 변환되면 타입이 사라지기 때문에 push,pop이 사용이 된다.
// 타입의 길이제한이 안 먹힘
// 그러니 주의해서 사용해야함.
tup1.push(1);
tup1.pop();
tup1.pop();
tup1.pop();

// 튜플은 넣어야 되는 값이 정해져있고 그 순서를 지키는게 중요할때
// 타입을 이용해서 잘못된 값을 넣지 않도록 방지 할 수 있음.
const users: [string, number][] = [
  ["aaa", 1],
  ["bbb", 2],
  ["ccc", 3],
  ["ddd", 4],
  // [5, "eee"],
];
