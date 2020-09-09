const Notes = require("../lib/model/notes-collection");

require("@code-fellows/supergoose");

// eslint-disable-next-line
  describe("Note Module", () => {

  it("test create()", () => {
    const obj = { text: "note", category: "school" };
    return Notes.create(obj)
      .then((record) => {
        Object.keys(obj).forEach((key) => {
          expect(record[key]).toEqual(obj[key]); // must bbe identical
        });
      });
  });

  it("test get()", () => {
    const obj = { text: "", category: "" };
    return Notes.get({})
      .then((record) => {
        Object.keys(obj).forEach((key) => {
          expect(Object.keys(record).includes(key)); // just keys are constraints
        });
      });
  });


  it("test get({ _id })", () => {
    const obj = { text: "note", category: "school" };
    return Notes.create(obj)
      .then((record) => {
        return Notes.get({ _id: record._id})
          .then((recordData) => {
            Object.keys(obj).forEach((key) => {
              expect(recordData[key]).toEqual(obj[key]); // must be indentical
            });
          });
      });
  });

  it("test get({ category })", () => {
    const obj = { text: "note", category: "school" };
    return Notes.create(obj)
      .then((record) => {
        return Notes.get({ category: record.category })
          .then((results) => {
            results.forEach((recordData) => {
              expect(recordData.category).toEqual(obj.category); // must bbe identical
            })
          });
      });
  });


  it("test update()", () => {
    const obj = { text: "note", category: "school" };
    return Notes.create(obj)
      .then((record) => {
        return Notes.update(record._id, obj)
          .then((updated) => {  // updated return the old values!!!!!
            return Notes.get({ _id: record._id})
              .then((recordData) => {
                Object.keys(obj).forEach((key) => {
                  expect(recordData[key]).toEqual(obj[key]); // must be indentical
                });
              });
          });
      });
  });

  it("test delete()", () => {
    const obj = { text: "note", category: "school" };
    return Notes.create(obj)
      .then((record) => {
        return Notes.delete(record._id)
          .then(() => {
            return Notes.get({ _id: record._id})
              .then((recordData) => {
                expect(recordData).toBe(null);
              });
          });
      });
  });

});
