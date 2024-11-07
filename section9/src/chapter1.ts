/**
 * 분산적인 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

// 분산적인 조건부 타입
// 한번은 number, 한번은 string으로 들어감
// StringNumberSwitch<number> => string
// StringNumberSwitch<string> => number
// => union 으로 묶음.
let c: StringNumberSwitch<number | string>;

let d: StringNumberSwitch<number | string | boolean>;

// 분산 방지
type StringNumberSwitch2<T> = [T] extends [number] ? string : number;

let e: StringNumberSwitch2<number | string | boolean>;

/**
 * 실용적인 예제
 */

// 다른때 T를 반환하고, 포함되면 never반환
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>;
// 1단계
// Exclude <number, string>
// Exclude <string, string>
// Exclude <boolean, string>

// 2단계
// number |
// never |
// boolean

// 결과
// number | never | boolean => number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1단계
// Exclude <number, string>
// Exclude <string, string>
// Exclude <boolean, string>

// 2단계
// never |
// string |
// never

// 결과
// never | string | never => string
