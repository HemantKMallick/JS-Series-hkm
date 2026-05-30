class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encryptPssword() {
    return `${this.password}abc`;
  }
  changeUserName() {
    return `${this.username.toUpperCase()}`;
  }
}
const chai = new User("chai", "chai@chai.com", "123");
console.log(chai.encryptPssword());
console.log(chai.changeUserName());
