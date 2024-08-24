// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// 자동으로 시작 숫자는 0부터할당
// 시작숫자 하나에만 값을 주면 그 뒤로는 +1 씩 늘어남.
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1 = {
  name: "이동석",
  role: Role.ADMIN, // 0<- 관리자
  language: Language.korean,
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 1 <-일반 유저
};

const user3 = {
  name: "아무개",
  role: Role.GUEST,
};

console.log(user1, user2, user3);
