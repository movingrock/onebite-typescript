// Unknown 타입
// 전체 집합
// 최상위 슈퍼 타입

const UnknownExam = () => {
  // 모든 타입이 업캐스팅됨.
  let a: unknown = 1;
  let b: unknown = "hello";
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  let unknownVar: unknown;

  // 다운캐스팅은 안됨.
  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
};

// Never 타입
// 공집합
// 반환값이 아무것도 없다.
const neverExam = () => {
  function neverFunc(): never {
    while (true) {}
  }

  // 모든 타입에 업캐스팅됨.
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다른 타입들이 다운캐스팅 할 수 없음.
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
};

// void 타입
// undefined의 슈퍼타입이다.

const voidExam = () => {
  function voidFunc(): void {
    console.log("hi");
  }
  let voidVar: void = undefined;
};

// any 타입
// 치트키
// 모든 타입의 슈퍼타입이자 모든 타입의 서브타입이다. (never 제외)

const anyExam = () => {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;

  anyVar = unknownVar;

  undefinedVar = anyVar;

  // neverVar = anyVar;
};
