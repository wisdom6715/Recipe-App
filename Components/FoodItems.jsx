import style from "./fooditem.module.css";
export default function FodItems({ food, setFoodId }) {
  return (
    <div className={style.foodContainer}>
      <img className={style.foodImage} src={food.image} alt="" />
      <h1 className={style.foodTitle}>{food.title}</h1>
      <button
        onClick={() => {
          console.log(food.id);
          setFoodId(food.id);
        }}
        className={style.viewButton}
      >
        View Recipe
      </button>
    </div>
  );
}
