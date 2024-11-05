/**
 * keyof 연산자
 * keyof 객체 : 객체타입으로부터 모든 프로퍼티의 key를 union 타입으로 추출
 */

interface Person {
  name: string;
  age: number;
}

// key: keyof Person
//   => key: "name" | "age"

// Person이 필요없이 keyof typeof person으로 대체가능
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

const person: Person = {
  name: "이동석",
  age: 25,
};

getPropertyKey(person, "name");

/**
 * typeof 쓰임
 * 1. 특정변수의 type을 string으로 반환
 * 2. 특정변수의 타입을 뽑아내는 용도로 사용가능
 */

type Person2 = typeof person;
