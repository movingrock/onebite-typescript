/**
 * 조건부 타입
 * 삼항 연산자 사용
 * extends ㅁ ? ㅁ : ㅁ
 */

// 거짓이므로 number 타입
type A = number extends string ? string : number;

type ObjA = {
  a: number;
};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<number>;

let varB: StringNumberSwitch<string>;

// 모든 공백문자를 없애기.
// 오버로드 시그니처를 만들어서 함수내부에서 타입을 추론할 수 있도록함.
function removeSpaces<T>(text: T): T extends string ? string : undefined;

function removeSpaces<T>(text: any) {
  return text.replaceAll(" ", "");
}

let result = removeSpaces("hi im movingrock");
console.log(result);
