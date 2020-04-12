import Search from "./models/Search";
import Recipe from "./models/Recipe";
import { elements, renderSpinner, clearSpinner } from "./views/base";
import * as searchView from "./views/searchView";
/**Global state of the app
 * Search object
 * Current recipe object
 * shopping list object
 * liked recipes
 */
const state = {};

const controlSearch = async () => {
  // Get query from the view
  const query = searchView.getInput();
  console.log(query);
  if (query) {
    // Perform Search with the query by creating new Search object
    state.search = new Search(query);

    // Prepare UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderSpinner(elements.searchRes);

    // Search for recipes
    await state.search.getResutls();

    // Render results on UI
    console.log(state.search.result);
    clearSpinner();
    searchView.renderResults(state.search.result);
  }
};
elements.searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearch();
});

/***
 * Recipe controller
 */

 const controlRecipe = () => {
     const id = window.location.hash.replace('#','')
     console.log(id)
 }
  
 window.addEventListener('hashchange', controlRecipe)   
const recipes = new Recipe(46956);
recipes.getRecipe();
console.log(recipes);
