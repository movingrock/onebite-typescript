/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입들로만 만든 유니온 타입
 * string과 number은 공통점이 없는 서로소 집합이다.
 */

type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// Member -> {name}님 현재까지 {point}모았습니다.
// Guest -> {name}님 현재까지 {visitCount}번 오셨습니다.

// 직관적으로 if문 안의 값의 타입을 알 수 없음.
// 위에 타입을 살펴보고 프로퍼티를 대조해서 타입가드를 확인해야함.

/**
 * tag property에 string 리터럴 값을 넣어주면서
 * 각각의 타입들의 공통점이 사라지면서 서로소 유니온이 된다.
 *
 */
function login(user: User) {
  switch (user.tag) {
    case "ADMIN":
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case "MEMBER":
      console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
      break;
    case "GUEST":
      console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
      break;
  }

  // if ("kickCount" in user) {
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if ("point" in user) {
  //   console.log(`${user.name}님 현재까지 ${user.point}모았습니다.`);
  // } else {
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 오셨습니다.`);
  // }
}

// 비동기 작업의 결과를 처리하는 객체

// type AsyncTask = {
//   state: "LOADING" | "FAILED" | "SUCCESS";
//   error?: {
//     message: string;
//   };
//   response?: {
//     data: string;
//   };
// };

type LoadingTask = {
  state: "LOADING";
};

type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

// 타입을 여러개로 쪼개서 서로소 유니온으로 만들어주는것이 좋음.
// state로 구분을 하기 때문에 무조건 걸러진다.
type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case "LOADING":
      console.log("로딩 중");
      break;
    case "FAILED":
      console.log(`에러 발생 : ${task.error.message}`);
      break;
    case "SUCCESS":
      console.log(`성공: ${task.response.data}`);
      break;
  }
}

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "오류 발생 원인은~",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "데이터 ~~",
  },
};
