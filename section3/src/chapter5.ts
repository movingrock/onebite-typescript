/**
 * 타입 추론
 * 알아서 초기값을 기준으로 타입을 판단함
 * 타입 추론을 이용하면 안 적어줘도 됨.
 */

let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이동석",
  profile: {
    nickname: "movingrock",
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hello";
}

// 다르게 추론 되는 상황
// 하지만 되도록이면 타입을 쓰도록 하자.
// any 타입의 진화
let d; // 암묵적 any 타입
// d -> number
d = 10;
d.toFixed();

// d -> string
d = "hello";
d.toUpperCase();
// d.toFixed();

// 리터럴 타입으로 정해짐.
const num = 10;
const str = "hello";

// 유니온 타입으로 정해짐 (string | number)[]
let arr = [1, "string"];
