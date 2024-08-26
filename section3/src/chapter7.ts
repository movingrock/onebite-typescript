/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은타입으로
 * 타입을 상황에 따라 좁히는 방법
 */

type Person = {
  name: string;
  age: number;
};

// value => number : toFixed
// value => string : toUpperCase
// value => Date : getTime
// value => Person: name은 age살 입니다.
function func(value: number | string | Date | null | Person) {
  // number | string 타입으로 타입 보장이 안됨.
  // value.toUpperCase();
  // value.toFixed();

  // 타입가드
  // 조건문을 통해서 자동추론을 함.
  // if문과 typeof를 이용한 방법
  if (typeof value === "number") {
    console.log(value.toFixed());
  } else if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (value instanceof Date) {
    // typeof value === "Date" 하면 null 값 때문에 안됨.
    console.log(value.getTime());
  } else if (value && "age" in value) {
    console.log(`${value.name}은 ${value.age}살 입니다.`);
  }
}

// instanceof 왼쪽의 값이 오른쪽의 객체이면 true, 아니면 false
// 오른쪽 값은 클래스가 와야함.
// null은 통과할 수 없음.

// 그런데 내가 선언한 Person타입은 instanceof로 받을 수 없음.
// 클래스가 아니기 때문에 따라서
// value && "age" in value 로 null을 확인하고 "age" property가 안에 있는지 확인하기
