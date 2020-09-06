const minimist = require("minimist");

function Input() {
  this.action = null;
  this.payload = null;

  console.log("process.argv : ", process.argv);

  // Get the -x style of arguments from the user
  const args = minimist(process.argv.slice(2));
  console.log(" args minimist >>>>> ", args);
  if (!("a" in args) && !("add" in args)) {
    throw new Error("please enter content");
  } else {
    this.action = "add";
    this.payload = args.a || args.add;
  }
}

Input.prototype.getAction = function () {
  return this.action;
};

Input.prototype.getPayload = function () {
  return this.payload;
};

module.exports = Input;
