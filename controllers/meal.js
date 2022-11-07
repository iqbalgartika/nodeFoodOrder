const Meal = require("../models/meal");

exports.getMeals = async (req, res, next) => {
  try {
    const data = await Meal.find();
    const meals = data.map((meal) => {
      return {
        id: meal._id,
        name: meal.name,
        description: meal.name,
        price: meal.price,
      };
    });
    res.json(meals);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: "not ok",
    });
  }
};

exports.getMeal = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const meal = await Meal.findById(id);
    res.json(meal);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      result: "not ok",
    });
  }
};

exports.postMeal = async (req, res, next) => {
  try {
    const meal = new Meal({ ...req.body });
    const save = await meal.save();
    console.log(save);
    res.json({
      result: save,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      result: "not ok",
    });
  }
};
