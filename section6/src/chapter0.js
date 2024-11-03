/**
 * 클래스
 */

let studentA = {
  name: "이동석",
  grade: "A+",
  age: 25,
  study() {
    console.log("열심히 게임 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

let studentB = {
  name: "jason",
  grade: "b+",
  age: 23,
  study() {
    console.log("열심히 함");
  },
  introduce() {
    console.log("안녕하세요");
  },
};

// 앞글자는 대문자
class Student {
  // field 필드
  name;
  grade;
  age;

  // 생성자
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }

  // 메서드
  study() {
    console.log("열심히 게임 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}
// 클래스를 이용해서 만든 객체-> 인스턴스
// student 인스턴스
let studentC = new Student("이동석", "A+", 25);
console.log(studentC);
studentC.study();
studentC.introduce();

// 상속
class StudentDeveloper extends Student {
  // 필드
  name;
  grade;
  age;
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age);
    this.favoriteSkill = favoriteSkill;
  }

  // 메서드
  study() {
    console.log("열심히 게임 함");
  }

  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }

  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍 함`);
  }
}

const studentDeveloper = new StudentDeveloper("이동석", "B+", 25, "typescript");
console.log(studentDeveloper);
studentDeveloper.programming();
