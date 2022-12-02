class Student {
  constructor(firstName, lastName) {
    // this 指稱的是所建立的 instance
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // 原型方法
  getName() {
    // this 指稱的是所建立的 instance
    return `${this.firstName} ${this.lastName}`;
  }
}