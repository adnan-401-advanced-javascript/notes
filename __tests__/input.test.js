const minimist = require("minimist");

jest.spyOn(global.console, 'error');

const Input = require("../lib/input");

jest.mock("minimist"); // eslint-disable-line

// eslint-disable-next-line
  describe("Input Module", () => {

  it("test getAction()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed", category: "school" }));
    const input = new Input();
    expect(input.getAction()).toEqual("add");
  });

  it("test Add getAction()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed", category: "school" }));
    const input = new Input();
    expect(input.getAction()).toEqual("add");
  });

  it("test Add getPayload()", ()=> {
    minimist.mockImplementationOnce(() => ({ a: "ahmed", category: "school" }));
    const input = new Input();
    expect(input.getPayload()).toEqual({ text: "ahmed", category: "school" });
  });

  it("test list action()", ()=> {
    minimist.mockImplementationOnce(() => ({ list: true }));
    const input = new Input();
    expect(input.getAction()).toEqual("list");
    expect(input.getPayload()).toEqual(true);
  });

  it("test delete action()", ()=> {
    minimist.mockImplementationOnce(() => ({ delete: "id" }));
    const input = new Input();
    expect(input.getAction()).toEqual("delete");
    expect(input.getPayload()).toEqual("id");
  });

  it("test an isValid()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed", category: "school" }));
    const input = new Input();
    expect(input.isValid()).toBeTruthy();
  });

  it("test not isValid()", () => {
    minimist.mockImplementationOnce(() => ({ a: null }));
    const input = new Input();
    expect(input.isValid()).toBeFalsy();
  });


  it("test no input data", () => {
    const input = new Input();
    expect(console.error).toHaveBeenCalled();
  });

});
