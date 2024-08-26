/**
 * 함수 타입 표현식 (function type expression)
 * 타입 별칭으로 타입을 지정할 수 있음
 */

type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
const sub: Operation = (a, b) => a - b;
const mul: Operation = (a, b) => a * b;
const div: Operation = (a, b) => a / b;

/**
 * 호출 시그니쳐(콜 시그니쳐)
 * 함수에 직접 타입 주는 부분과 모양이 똑같음
 * function ```func(a: number): void``` {}
 */

type Operation2 = {
  (a: number, b: number): number;
  // 객체 프로퍼티를 추가할 수 있음.
  name: string;
};

const add2: Operation2 = (a, b) => a + b;
const sub2: Operation2 = (a, b) => a - b;
const mul2: Operation2 = (a, b) => a * b;
const div2: Operation2 = (a, b) => a / b;

add2(1, 2);
add2.name;
