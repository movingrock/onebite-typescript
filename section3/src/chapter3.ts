// 기본 타입간의 호환성
let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

// 객체 타입간의 호환성
// 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가

// 슈퍼타입
type Animal = {
  name: string;
  color: string;
};

// 서브타입
// breed라는 추가 타입을 갖고 있기에 더 하위임.
type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;

// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "ㅇㅇ",
  price: 10,
  skill: "asdf",
};

book = programmingBook;
// programmingBook = book;

// 초과 프로퍼티 검사
// 객체 타입에 정의된 property만 넣어야한다.
let book2: Book = {
  name: "ddd",
  price: 12,
  // skill: "wer",
};

let book3: Book = programmingBook;

function func(book: Book) {}
func({
  name: "asdf",
  price: 123,
});

func(programmingBook);
