export const elements = {
  searchForm: document.querySelector(".search"),
  searchInput: document.querySelector(".search__field"),
  searchResList: document.querySelector(".results__list"),
  searchRes: document.querySelector(".results")
};
export const elementStrings = {
    loader : "loader"
}
export const renderSpinner = parent => {
  const loader = `
  <div class=${elementStrings.loader}>
     <svg>
         <use href="img/icons.svg#icon-cw"></use>
     </svg>
  </div>
  `;
  parent.insertAdjacentHTML("afterbegin", loader);
};

export const clearSpinner = () => {
    const loaderNode = document.querySelector(`.${elementStrings.loader}`);
    if(loaderNode){
        loaderNode.parentElement.removeChild(loaderNode);
    }
};
