import { useEffect, useState } from "react";
import style from "./search.module.css";

export default function Search({ FoodData, setFoodData }) {
  const [query, setQuery] = useState("pasta");
  const URL = "https://api.spoonacular.com/recipes/complexSearch";
  const API_KEY = "fc674822498e438e8c25f221a0b4e249";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={style.searchContainer}>
      <input
        className={style.searchInput}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        value={query}
      />
    </div>
  );
}
