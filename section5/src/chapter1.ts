/**
 * 인터페이스
 * 타입에 이름을 지어주는 또 다른 문법
 */

interface Person {
  readonly name: string;
  age?: number;
  // 함수 타입 시그니처
  // sayHi: () => void;

  // 호출 시그니처
  // 오버로딩을 하고 싶다면 호출 시그니처로
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: "이동석",
  sayHi: function () {
    console.log("Hi");
  },
};
// person.name = "이동석2";
