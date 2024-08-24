// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = "hello";

anyVar = true;
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase();
anyVar.toFixed();

// any 타입은 할당가능
let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => {};

// unknown 타입은 다른 값에 할당할 수 없음.
// num = unknownVar;

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}
