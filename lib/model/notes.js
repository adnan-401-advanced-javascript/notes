function Note() {}

Note.all = [];

Note.prototype.execute = function (action, payload) {
  switch (action) {
    case "add": {
      const note = new Note();
      note.add(payload);
    }
      break;
    default: console.log("no action handler");
  }
};

Note.prototype.add = function (payload) {
  const object = { id: Note.all.length + 1, note: payload };
  Note.all.push(object);
  console.log("you have entered", object);
};

module.exports = Note;
