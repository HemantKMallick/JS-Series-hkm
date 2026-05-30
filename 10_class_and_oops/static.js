class User {
  constructur(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username: ${this.username}`);
  }
  static createdId() {
    return `123`;
  }
}
const hemant = new User("Hemant");
console.log(hemant.createdId());
