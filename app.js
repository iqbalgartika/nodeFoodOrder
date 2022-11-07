const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const mealController = require("./controllers/meal");
const orderController = require("./controllers/order");

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get("/meals", mealController.getMeals);
app.get("/meal/:id", mealController.getMeal);
app.post("/meal", mealController.postMeal);
app.post("/order", orderController.postOrder);

mongoose
  .connect(
    "mongodb+srv://admin:Admin123@cluster0-elxt9.mongodb.net/foodOrder?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(9000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
