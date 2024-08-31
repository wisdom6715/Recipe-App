import { useState } from "react";
import Search from "../Components/Search";
import FoodLists from "../Components/FoodLists";
import Nav from "../Components/Nav";
import style from "../Components/app.module.css";
import Container from "../Components/Container";
import InnerContainer from "../Components/InnerContainer";
import FoodDetail from "../Components/FoodDetail";

function App() {
  const [FoodData, setFoodData] = useState([]);
  const [FoodId, setFoodId] = useState("");
  return (
    <div>
      <Nav />
      <Search FoodData={FoodData} setFoodData={setFoodData} />
      <Container>
        <InnerContainer>
          <FoodLists setFoodId={setFoodId} FoodData={FoodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail FoodId={FoodId} />
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
