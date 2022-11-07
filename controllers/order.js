const Order = require("../models/order");
const User = require("../models/user");

exports.postOrder = async (req, res, next) => {
  try {
    const user = new User({ ...req.body.userData });
    await user.save()
    const order = new Order({
      userData: user,
      meals: req.body.meals,
    });
    const save = await order.save();
    // console.log(save);
    res.json({
      result: save,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).json({
      result: "not ok",
    });
  }
};
