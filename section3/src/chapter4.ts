/* 
대수 타입
여러개의 타입을 합성해서 새롭게 만들어낸 타입
 */

/* 
1. 합집합 - Union 타입
*/
let a: string | number | boolean;
a = 1;
a = "hello";
a = true;

let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};

type Union1 = Dog | Person;

let union1: Union1 = {
  name: "asdf",
  color: "asdf",
};

let union2: Union1 = {
  name: "asdf",
  language: "asdf",
};

// 교집합에 포함됨. 따라서 합집합에 포함됨.
let union3: Union1 = {
  name: "asdf",
  language: "asdf",
  color: "asdf",
};

// 합집합에 포함안됨.
// let union4: Union1 = {
//   name: "asdf",
// };

/**
 * 2. 교집합 타입 - Intersection 타입
 */

let variable: number & string;

type Intersection = Dog & Person;

// 모든 property를 포함해야함.
let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};
