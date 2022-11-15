import { Request, Response, NextFunction } from "express";
import Meal from "../models/meal";

export const getMeals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const getMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

export const postMeal = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
