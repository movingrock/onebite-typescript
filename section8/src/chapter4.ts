/**
 * 템플릿 리터럴 타입
 * `${}-${}`
 * 모든 타입조합을 만들어 낼 수 있음.
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`;

const coloredAnimal: ColoredAnimal = "black-cat";
