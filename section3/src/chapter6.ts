/**
 * 타입 단언 (assertion)
 */

type Person = {
  name: string;
  age: number;
};

// 객체의 property를 나중에 추가하려는 경우
// 처음에 빈 객체만 넣어주면 빈 객체 타입{}으로 정의됨.
// let person = {};
// 이러면 객체에 property가 없다고 에러를 보냄.
// let person: Person = {};

let person = {} as Person;
person.name = "이동석";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

// 추가 property가 있으면 오류가 나는데 타입 단언으로 추가가능
let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야함.
 *
 * 겹치는 부분이 아예 없으면 오류가 남
 */

let num1 = 10 as never;
let num2 = 10 as unknown;

// let num3 = 10 as string;
// 만약 없애고 싶다면
let num3 = 10 as unknown as string;

/**
 * const 선언
 */

let num4 = 10 as const;

// 속성이 readonly가 되서 읽기만 가능함.
// 속성이 여러개여서 앞에 일일히 readonly를 붙이기 힘들때 사용
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 * 잠깐 눈가리는 기능 (위험한 문법)
 */

type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
  author: "이동석",
};
// ? 옵셔널 체이닝
// 값이 null이거나 undefined 일 경우에 점 표기법 접근하면 오류가 발생하므로
// 값 전체를 undefined로 만들어줌

// post.author?.length가 undefined 값일 수 있음. number에 undefined를 넣을 수 없기 때문에
// const len: number = post.author?.length;

// null값이 아니라고 단언해줌.
const len: number = post.author!.length;
