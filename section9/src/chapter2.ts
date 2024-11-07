/**
 * infer
 */

// func이 반환하는 타입을 반환하고 싶다.
type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

// 타입추론 불가
type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

type promiseA = PromiseUnpack<Promise<number>>;
type promiseB = PromiseUnpack<Promise<string>>;
