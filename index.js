#!/usr/bin/env node

const mongoose = require("mongoose");

require("dotenv").config();

const mongoURL = process.env.MONGOOSE_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const Note = require("./lib/model/notes");
const Input = require("./lib/input");

const input = new Input();

if (input.isValid()) {
  const action = input.getAction();
  const payload = input.getPayload();

  const ourNotes = new Note();

  ourNotes.execute(action, payload);
}
