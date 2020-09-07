const Note = require("../lib/model/notes");

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

// eslint-disable-next-line
  describe("Note Module", () => {

  const validData = {
    action: "add",
    payload: "adnan",
  };

  it("test valid executeAdd()", () => {
    const note = new Note();
    note.execute(validData.action, validData.payload);
    expect(console.log).toHaveBeenCalled();
  });

  const inValidData = {
    action: "non",
    payload: null,
  };

it("testinValid executeAdd()", () => {
    const note = new Note();
    note.execute(inValidData.action);
    expect(console.error).toHaveBeenCalled();
  });

});
