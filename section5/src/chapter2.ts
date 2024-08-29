/**
 * 인터페이스의 확장
 */

// interface Animal {
//   name: string;
//   color: string;
// }

// interface가 아니라 type이여도 됨.
type Animal = {
  name: string;
  color: string;
};

interface Dog extends Animal {
  // name: number;
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface DogCat extends Dog, Cat {}

const dogcat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
