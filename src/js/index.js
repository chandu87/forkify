import Search from './models/Search';
import {elements} from './views/base';
import * as searchView from './views/searchView';
/**Global state of the app
 * Search object
 * Current recipe object
 * shopping list object
 * liked recipes
 */
const state = {

};
const controlSearch = async ()=>{
    // Get query from the view
    const query = searchView.getInput();
    console.log(query);
    if(query){
        // Perform Search with the query by creating new Search object
        state.search = new Search(query);

        // Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // Search for recipes
        await state.search.getResutls();

        // Render results on UI
        console.log(state.search.result);
        searchView.renderResults(state.search.result);
    }


};
elements.searchForm.addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});