import axios from "axios";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      const res = await axios(
        `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.image_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  calculateTime() {
    const Numing = this.ingredients.length;
    const periods = Math.ceil(Numing / 3);
    this.time = periods * 15;
  }
  calculateServings() {
    this.servings = 4;
  }
  parseIngredients() {
    const unitsLong = [
      "tablespoons",
      "tablespoon",
      "ounces",
      "ounce",
      "teaspoons",
      "teaspoon",
      "cups",
      "pounds",
    ];
    const unitsShort = [
      "tbsp",
      "tbsp",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound",
    ];
    const newIngredients = this.ingredients.map((el) => {
      //uniform units
      let ingredient = el.toLowerCase();
      unitsLong.forEach((unit, i) => {
        // console.log(ingredient);
        ingredient = ingredient.replace(unit, unitsShort[i]);
        // console.log(ingredient);
      });

      //remove parenthesis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

      //parse ingredients into count, unit, ingrediant
      const arrIng = ingredient.split(" ");
      // console.log("array of ingredients", arrIng);
      const unitIndex = arrIng.findIndex((element2) =>
        unitsShort.includes(element2)
      );
      // console.log("Units exist ", unitIndex);
      let objIng;
      let totalCount;
      if (unitIndex > -1) {
        //there is a unit
        const arrayCount = arrIng.slice(0, unitIndex);
        if (arrayCount.length === 1) {
          totalCount = eval(arrIng[0].replace("-", "+"));
        } else {
          totalCount = eval(arrIng.slice(0, unitIndex).join("+"));
        }
        objIng = {
          count: totalCount,
          unit: unitsShort[unitIndex],
          ingredient: arrIng.slice(2).join(" "),
        };
      } else if (parseInt(arrIng[0], 10)) {
        //there is no unit but there is a number
        objIng = {
          count: parseInt(arrIng[0], 10),
          unit: "",
          ingredient: arrIng.slice(1).join(" "),
        };
      } else if (unitIndex === -1) {
        // there is no unit
        objIng = {
          count: "1",
          unit: "",
          ingredient,
        };
      }
      return objIng;
    });
    this.ingredients =  newIngredients ;
  }
}
