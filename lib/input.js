const minimist = require("minimist");

/**
 * @class Input
 */

class Input {
  constructor() {
    /**
     * [action description]
     * @property {string} action
     * @property {string} payload
     */
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
    }
  }

  /**
   * [input getAction]
   * @method getAction
   * @return {string}
   */

  getAction() {
    return this.action;
  }

  /**
   * [input getPayload]
   * @method getPayload
   * @return {string}
   */

  getPayload() {
    return this.payload;
  }

  /**
   * [input check the isValid]
   * @method isValid
   * @return {Boolean}
   */

  isValid() {
    return !!(this.action && this.payload && JSON.stringify(this.payload) !== "{}");
  }
}

module.exports = Input;
