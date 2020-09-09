const schema = require("./notes-schema.js");

class Note {
  /* eslint-disable-next-line */
    create(record) {
    const newRecord = new schema(record);
    return newRecord.save();
  }

  /* eslint-disable-next-line */
    get({ _id, category }) {
    if (_id) {
      return schema.findById(_id);
    }
    if (category && category !== true) { // true means no category
      return schema.find({ category });
    }
    return schema.find();
  }

  update(_id, record) {
    return schema.findOneAndUpdate({_id: _id}, record );
  }

    delete(_id) {
        return schema.findByIdAndDelete(_id);
    }
}

module.exports = new Note();
