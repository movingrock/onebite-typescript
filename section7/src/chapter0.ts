/**
 * 제네릭
 * (일반적인, 포괄적인)
 * 제네릭 함수
 * 모든 타입에 쓸 수 있는 함수
 * 함수를 호출 할때마다 자료형이 결정됨.
 */

// function func(value: any) {
//   return value;
// }

function func<T>(value: T): T {
  return value;
}

let num = func(10);
let bool = func(true);
let str = func("string");

// tuple 타입으로 명시할 수 있음.
let arr = func<[number, number, number]>([1, 2, 3]);
// let arr = func([1, 2, 3] as [number, number, number]);
