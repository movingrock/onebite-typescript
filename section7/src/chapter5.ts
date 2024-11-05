/**
 * 프로미스
 * 비동기처리의 결과값(resolve)의 타입을 처리할 수 있지만 (T)
 * 실패했을때의 (reject)의 타입은 처리할 수 없다. (unknown)
 */

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
    reject("~~때문에 실패");
  }, 3000);
});

// response가 number타입으로 추론됨.
promise.then((response) => {
  console.log(response * 10);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */

interface Post {
  id: number;
  title: string;
  content: string;
}

// 추천방법: 함수의 반환값에 작성
function fetchPost1(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "제목", content: "내용" });
    }, 3000);
  });
}

// Promise에 작성
function fetchPost2() {
  return new Promise<Post>((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "제목", content: "내용" });
    }, 3000);
  });
}

const postRequest = fetchPost1();

postRequest.then((post) => {
  post.id;
});
