/**
 * 인덱스드 엑세스 타입
 * 객체타입으로부터 특정 프로퍼티의 타입을 뽑아서 변수에 정의하도록 함.
 */

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}

const post: Post = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "이동석",
    age: 25,
  },
};

function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}

// 중첩대괄호로 세부 property도 뽑을 수 있다.
function printAuthorInfo2(id: Post["author"]["id"]) {
  console.log(`${id}`);
}

/**
 * 배열 타입
 */

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
    age: number;
  };
}[];

const post2: PostList[number] = {
  title: "제목",
  content: "본문",
  author: {
    id: 1,
    name: "이동석",
    age: 25,
  },
};

function printAuthorInfo3(author: PostList[number]["author"]) {
  console.log(`${author}`);
}

type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
// type Tup3 = Tup[3];
type TupNum = Tup[number];
