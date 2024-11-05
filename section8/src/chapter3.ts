/**
 * 맵드 타입
 */

interface User {
  id: number;
  name: string;
  age: number;
}

// 한번에 모든 프로퍼티가 선택적 프로퍼티로 바뀜
type PartialUser = {
  [key in "id" | "name" | "age"]?: User[key];
};

type BooleanUser = {
  [key in keyof User]: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  // ...  기능
  return {
    id: 1,
    name: "이동석",
    age: 25,
  };
}

function updateUser(user: PartialUser) {
  // ... 수정하는 기능
}

updateUser({
  // 변경되지 않는 값은 넣고 싶지 않다.
  // id: 1,
  // name: "이동석",
  age: 30,
});
