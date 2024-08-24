// object
let user: object = {
  id: 1,
  name: "이동석",
};

// object타입으로 정의하면 객체의 프로퍼티나 메서드에 뭐가 있는지를 알 수 없음.
// user.id;

// 객체 리터럴 타입
// 구조적 타입 시스템 (프로퍼티 기반 타입 시스템)
//   <-> 명목적 타입 시스템(다른 언어들)

// 프로퍼티 타입 앞에 ? 를 붙이면 선택적(optional) property라고 한다.
// 없어도 되는 프로퍼티가 됨.
let user2: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이동석",
};

// id없어도 됨.
user2 = {
  name: "홍길동",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "돌돌이",
  color: "brown",
};

// readonly 읽기 전용 프로퍼티로 만들기
let config: {
  readonly apiKey: string;
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked"
