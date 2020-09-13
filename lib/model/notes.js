const Note = require("./notes-collection.js");

/**
 * @class Notes
 */

class Notes {
  /**
   * [execute]
   * @method execute
   * @param  {string} action  action type add || delete || list
   * @param  {string} payload data
   */
  execute(action, payload) {
    switch (action) {
      case "add":
        this.add(payload);
        break;
      case "delete":
        this.delete(payload);
        break;
      case "list":
        this.list(payload);
        break;
      default: console.error(`node ${action} handler`);
    }
  }

  /**
   * [add note]
   * @method add
   * @param  {string}  text     note text
   * @param  {string}  category note category
   * @return {Promise}
   */

  // eslint-disable-next-line
  async add({ text, category }) {
    const data = await Note.create({ text, category });
    console.log(`note saved ${text}`);
    return data;
  }

  /**
   * [delete note]
   * @method delete
   * @param  {number}  id note id
   * @return {Promise}
   */
  // eslint-disable-next-line
  async delete(id) {
    const data = await Note.delete(id);
    if (data) {
      console.log(`Deleted Note ${data._id}`); // eslint-disable-line
    } else {
      console.log(data);
    }
    process.exit(0);
  }

  /**
   * [list notes]
   * @method list
   * @param  {string}  category [note category]
   * @return {Promise}
   */
  // eslint-disable-next-line
  async list(category) {
    const data = await Note.get({ category });
    /* eslint-disable-next-line */
    data.map((e) => {
      console.log(`
${e.text}
Category: ${e.category}  ID: ${e._id}
--------------------------------------------------
`);
    });
    process.exit(0);
  }
}

module.exports = Notes;
