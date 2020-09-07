class Note {
  constructor(height, width) {
    this.height = height;
    this.width = width;
    this.data = [];
  }

  execute(action, payload) { //
    switch (action) {
      case "add":
        this.add(payload);
        break;
      default: console.log("no action handler");
    }
  }

  add(payload) {
    const object = { id: Math.floor(Math.random() * 100), note: payload };
    this.data.push(object);
    console.log("you have entered", object);
  }
}

module.exports = Note;
