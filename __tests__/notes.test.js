const Note = require("../lib/model/notes");

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

// eslint-disable-next-line
  describe("Note Module", () => {

  const validData = {
    action: "add",
    payload: { text: "adnan5", category: "schoool" },
  };


  it("test valid executeAdd()",() => {
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


  const deleteData = {
    action: "delete",
    payload: "id",
  };

  it("test valid delete()", () => {
    const note = new Note();
    note.execute(deleteData.action, deleteData.payload);
    expect(console.log).toHaveBeenCalled();
  });

  const listData = {
    action: "list",
    payload: true,
  };

  it("test valid list()", () => {
    const note = new Note();
    note.execute(listData.action, listData.payload);
    expect(console.log).toHaveBeenCalled();
  });


  const listCategoryData = {
    action: "list",
    payload: "school",
  };

  it("test valid list(category)", () => {
    const note = new Note();
    note.execute(listCategoryData.action, listCategoryData.payload);
    expect(console.log).toHaveBeenCalled();
  });

});
