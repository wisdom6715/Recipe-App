import { useEffect, useState } from "react";
function Button({FoodId,setIsLoading, setFood}){
    console.log(FoodId);
    
}
export default function useSpoonacular({FoodId, setIsLoading, setFood}){
    const URL = `https://api.spoonacular.com/recipes/${FoodId}/information`;
    const API_KEY = "fc674822498e438e8c25f221a0b4e249";

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
    return 
}