const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
      type: String,
      required: true
    },
    body: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

postSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Post', postSchema);