// 타입 별칭과 인덱스 시그니처

// 타입 별칭 (타입 별칭명도 중복되서는 안되고 지역변수처럼 함수내에서 선언이 됨)
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user: User = {
  id: 1,
  name: "이동석",
  nickname: "movingrock99",
  birth: "1999.04.15",
  bio: "안녕하세요",
  location: "서울",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "movingrock99",
  birth: "1999.04.15",
  bio: "안녕하세요",
  location: "서울",
};

// 인덱스 시그니처
// 공통된 타입이 계속 반복될때 key value의 타입을 명시
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

// Korea라는 프로퍼티가 무조건 있어야 한다고 선언
type CountryNumberCodes = {
  [key: string]: number;
  Korea: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};
