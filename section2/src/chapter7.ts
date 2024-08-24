// void
// 공허 (아무것도 없다)
// 반환값이 없을때 사용

function func1(): string {
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a = 1;
// a = "hello";
// a = {};
// undefined만 가능
a = undefined;
// strictNullChecks: false하면 가능
// a = null;

// never
// 존재하지 않는 불가능한 타입
// 반환값이 있을 수가 없음.
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}

let b: never;
