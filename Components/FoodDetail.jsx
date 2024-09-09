import style from "./fooddetails.module.css";
import useSpoonacular from "./useSpoonacular";
import { useState } from "react";
import Button from "./useSpoonacular"

export default function FoodDetail({ FoodId }) {
  const [food, setFood] = useState("pasta"); // Initialize as an empty object
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className={style.FoodInfoContainer}>
      <div>
        <h1>Food Details</h1>
        <img className={style.foodImage} src={food.image} alt={food.title} />
        <div>
          <h2><span> {food.readyInMinutes} Minutes </span></h2>
         <h2> <span> ${Math.floor(food.pricePerServing / 100)} per Servings</span></h2>
          <h2><span>Servings {food.servings} </span></h2>
          <h2><span> {food.vegetarian ? "Vegeterian" : "Non-vegeterian"} </span></h2>
        </div>
        <div>
          <h1>Ingredients</h1>
          {isLoading ? (
            <p>Loading.......</p>
          ) : (
            <span>{food.extendedIngredients.map(items => <li key={items.name}>{items.name}</li> )}</span>
          )}
        </div>
        <div>
          <h1>Instructions</h1>
          {isLoading ? (
            <p>Loading.......</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li key={step.step}> {step.step} </li>
            ))
          )}
        </div>
        <Button FoodId={FoodId} setIsLoading={setIsLoading} setFood={setFood}/>
      </div>

      <p>{food.title}</p>
    </div>
  );
}
