const minimist = require("minimist");

class Input {
  constructor() {
    this.action = null;
    this.payload = null;

    // Get the -x style of arguments from the user
    const args = minimist(process.argv.slice(2)) || [];
    if (!("a" in args) && !("add" in args)) {
      console.error("please enter content");
    } else {
      this.action = "add";
      this.payload = args.a || args.add;
    }
  }

  getAction() {
    return this.action;
  }

  getPayload() {
    return this.payload;
  }

  isValid() {
    return !!(this.action && this.payload);
  }
}

module.exports = Input;
