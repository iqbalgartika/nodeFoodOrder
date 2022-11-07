const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const order = Schema({
  userData: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  meals: [
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Order", order);
