/**
 * 타입스크립트의 클래스
 */

const employee = {
  name: "이동석",
  age: 25,
  position: "developer",
  work() {
    console.log("일함");
  },
};

class Employee {
  name: string;
  age: number;
  position: string;

  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  work() {
    console.log("일함");
  }
}

const employeeB = new Employee("이동석", 25, "개발자");
console.log(employeeB);

const employeeC: Employee = {
  name: "",
  age: 0,
  position: "",
  work() {},
};

console.log(employeeC);

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  constructor(name: string, age: number, position: string, officeNumber: number) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
