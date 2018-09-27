import axios from "axios";

async function searchFoodForkApi(query) {
  const apiKey = "66bdd2ec39d9591c3a9a10b507f104b9";
  try {
    const res = await axios(
      `https://www.food2fork.com/api/search?key=${apiKey}&q=${query}`
    );
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}
searchFoodForkApi("pizza");
