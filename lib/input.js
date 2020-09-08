const minimist = require("minimist");

class Input {
  constructor() {
    this.action = null;
    this.payload = null;

    // Get the -x style of arguments from the user
    const args = minimist(process.argv.slice(2)) || [];
    if (("a" in args) || ("add" in args)) {
      this.action = "add";
      this.payload = { text: args.a || args.add, category: args.category };
    } else if ("delete" in args) {
      this.action = "delete";
      this.payload = args.delete;
    } else if ("list" in args) {
      this.action = "list";
      this.payload = args.list;
    } else {
      console.error("please enter valid command");
      process.exit(1);
    }
  }

  getAction() {
    return this.action;
  }

  getPayload() {
    return this.payload;
  }
}

module.exports = Input;
