import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
}
const limitRecipeTitle = (title, limit = 17) =>{
    const newTitle = [];
    if(title.length > limit){
        // console.log(title.length)
        title.split(' ').reduce((acc, cur)=>{
            if(acc + cur.length <= limit)
            {
                // console.log("reduce" + cur);
                newTitle.push(cur);
            }
            return acc + cur.length;
        }, 0);
        // console.log(newTitle);
        return `${newTitle.join(' ')} ...`;
    }
    return title;
}
const renderRecipe = recipe => {
    const limitedRecipeTitle = limitRecipeTitle(recipe.title);
  const markup = `
  <li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="Test">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitedRecipeTitle}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
  </li>
  `;
  elements.searchResList.insertAdjacentHTML('beforeend', markup);
};
const createButton = (page, type) =>{

    // <!--
    // <button class="btn-inline results__btn--prev">
    //     <svg class="search__icon">
    //         <use href="img/icons.svg#icon-triangle-left"></use>
    //     </svg>
    //     <span>Page 1</span>
    // </button>
    // <button class="btn-inline results__btn--next">
    //     <span>Page 3</span>
    //     <svg class="search__icon">
    //         <use href="img/icons.svg#icon-triangle-right"></use>
    //     </svg>
    // </button>
    // -->

};

const renderButtons = (page, numResults, resPerPage) => {
 const pages = Math.ceil(numResults/resPerPage); 
 if(page == 1 && pages > 1){
     //only next page button
 }
 else if(page > pages){
    //both buttons
 }else if(page === pages && pages > 1){
    //only prev button
 }
};

export const renderResults = (recipes, page=1, resPerPage=10) => {
    const start = (page-1)*resPerPage; 
    const end = page * resPerPage;
  recipes.slice(start,end).forEach(renderRecipe);
};
