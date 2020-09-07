const minimist = require("minimist");

jest.spyOn(global.console, 'error');

const Input = require("../lib/input");

jest.mock("minimist"); // eslint-disable-line

// eslint-disable-next-line
  describe("Input Module", () => {

  it("test getAction()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed" }));
    const input = new Input();
    expect(input.getAction()).toEqual("add");
  });

  // eslint-disable-next-line
  it("getPayload()", ()=> {
    minimist.mockImplementationOnce(() => ({ a: "ahmed" }));
    const input = new Input();
    expect(input.getPayload()).toEqual("ahmed");
  });

  it("test getAction()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed" }));
    const input = new Input();
    expect(input.getAction()).toEqual("add");
  });

  it("test an isValid()", () => {
    minimist.mockImplementationOnce(() => ({ a: "ahmed" }));
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
