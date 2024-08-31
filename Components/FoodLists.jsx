import FoodItems from "./FoodItems";
import style from "./foodlist.module.css";
export default function FoodLists({ FoodData, setFoodId }) {
  return (
    <div className={style.foodListContainer}>
      {FoodData.map((food) => (
        <FoodItems setFoodId={setFoodId} key={food.id} food={food} />
      ))}
    </div>
  );
}
