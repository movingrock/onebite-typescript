/**
 * 접근 제어자
 * access modifier
 * public     기본값, 아무제약없음
 * private    클래스 내에서만 액세스 가능, 외부에서 쓸수도 읽을수도 없음.
 * protected  파생클래스에서는 접근할 수 있음.
 */

// class Employee {
//   name: string;
//   age: number;
//   position: string;

//   constructor(name: string, age: number, position: string) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//   }

//   work() {
//     console.log("일함");
//   }
// }

class Employee {
  constructor(private name: string, protected age: number, private position: string) {}

  work() {
    console.log(`${this.position} 일함`);
  }
}

const employee = new Employee("이동석", 25, "developer");
console.log(employee);
employee.work();
