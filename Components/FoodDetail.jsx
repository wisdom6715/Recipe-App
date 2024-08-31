import { useEffect, useState } from "react";
import style from "./fooddetails.module.css";

export default function FoodDetail({ FoodId }) {
  const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
  const API_KEY = "fc674822498e438e8c25f221a0b4e249";
  const [food, setFood] = useState("pasta"); // Initialize as an empty object
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      setFood(data);
      console.log(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [FoodId]);

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
          <h1>Ingreidents</h1>
          {food.extendedIngredients.map((item)=> 
            <h3>{item.name}</h3>
          )}
        </div>
        <div>
          <h1>Instructions</h1>
          {isLoading ? (
            <p>Loading.......</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li> {step.step} </li>
            ))
          )}
        </div>
      </div>

      <p>{food.title}</p>
    </div>
  );
}
