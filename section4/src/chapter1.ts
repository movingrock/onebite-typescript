/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 이야기
// 어떤 [타입의]매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 이야기
function func(a: number, b: number) {
  return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */

const add = (a: number, b: number) => a + b;

/**
 * 함수의 매개변수
 */

// 필수 매개변수는 선택적 매개변수보다 앞에 있어야한다.
function introduce(name = "이동석", tall?: number) {
  console.log(`name: ${name}`);
  if (typeof tall === "number") console.log(`tall: ${tall + 10}`);
}

introduce("이동석", 178);
introduce("이동석");

// 가변 길이의 변수를 묶어서 배열로 저장
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

// 만약 3개만 받고싶다면
function getSum2(...rest: [number, number, number]) {}
