const Note = require("./lib/model/notes");
const Input = require("./lib/input");

const input = new Input();
if (input.isValid()) {
  const action = input.getAction();
  const payload = input.getPayload();

  const ourNotes = new Note();

  ourNotes.execute(action, payload);
}
