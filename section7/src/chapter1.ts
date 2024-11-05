/**
 * 첫번째 사례
 * 타입을 여러개 설정할 수 있다.
 */

// function swap<T>(a: T, b: T) {
//   return [b, a];
// }

// T가 먼저 string타입으로 할당되었기에 두번째도 string이 들어가야한다.
// const [a, b] = swap("1", 2);

function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap("1", 2);

/**
 * 두번째 사례
 * T에 할당될 타입이 최소 unknown배열타입이라는걸 명시
 * data: T[]                타입이 여러개면 union으로 나옴
 * data: [T, ...unknown[]] 첫번째 요소의 타입만 꺼냄.
 */

// function returnFirstValue<T>(data: T[]) {
//   return data[0];
// }

function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, "hello", "mynameis"]);

/**
 * 세번째 사례
 * T의 타입을 제한함.
 */

interface InterfaceA {
  length: number;
}

interface InterfaceB extends InterfaceA {}

function getLength<T extends { length: number }>(data: T) {
  return data.length;
}

let var1 = getLength([1, 2, 3]);
let var2 = getLength("12345");
let var3 = getLength({ length: 10 });
// let var4 = getLength(10);
