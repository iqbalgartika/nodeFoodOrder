import { Router } from "express";

import { getMeals, getMeal, postMeal } from "../controllers/meal";

const router = Router();

router.get("/meals", getMeals);
router.get("/meal/:id", getMeal);
router.post("/meal", postMeal);

export default router;
