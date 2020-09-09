const NoteSchema = require("./notes-schema");

class Note {
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

  // eslint-disable-next-line
  async add({ text, category }) {
    console.log("note saved", text);
    const newNote = new NoteSchema({ text, category });
    await newNote.save();
  }

  // eslint-disable-next-line
  async delete(id) {
    const data = await NoteSchema.findByIdAndDelete(id);
    if (data) {
      console.log(`Deleted Note ${data._id}`); // eslint-disable-line
    } else {
      console.log(data);
    }
  }

  // eslint-disable-next-line
  async list(category) {
    const data = await NoteSchema.find(typeof (category) === "string" ? { category } : {});
    /* eslint-disable-next-line */
    data.map((e) => {
      console.log(`
${e.text}
Category: ${e.category}  ID: ${e._id}
--------------------------------------------------
`);
    });
  }
}

module.exports = Note;
