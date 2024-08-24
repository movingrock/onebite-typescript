/**
 * 타입 추록
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

// any 타입의 진화
let d; // 암묵적 any 타입
d = 10;
d.toFixed();

d = "hello";
d.toUpperCase();
// d.toFixed();
