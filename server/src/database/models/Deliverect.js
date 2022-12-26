const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// MVP Schema If we need we can create as per our requirements
const DeliverectSchema = new Schema(
  {
    name: String,
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret.__v;
      },
    },
    timestamps: true,
  }
);

module.exports = mongoose.model("deliverect", DeliverectSchema);
