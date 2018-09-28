import Search from './models/Search';

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
    const query = "Pizza";
    if(query){
        // Perform Search with the query by creating new Search object
        state.search = new Search(query);

        // Prepare UI for results


        // Search for recipes
        await state.search.getResutls();

        // Render results on UI
        console.log(state.search.result);
    }


};
document.querySelector(".search").addEventListener('submit', e =>{
    e.preventDefault();
    controlSearch();
});