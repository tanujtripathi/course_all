
/**
 * base.js contains common objects and methods
 */

export const elements = {
    searchInput: document.querySelector('.search__field'),
    searchForm: document.querySelector('.search'),
    searchResultsList: document.querySelector('.results__list'),
    searchButtons: document.querySelector('.results__pages')
}

// .class names
export const elementsStrings = {
    loader : 'loader'
}

// renders infinite rotating loader svg
export const renderLoader = parent => {

    const loader = `
    <div class="${elementsStrings.loader}">
     <svg>
      <use href="img/icons.svg#icon-cw"></use>
     </svg>
    </div>
    `;

    parent.insertAdjacentHTML('afterend', loader);
}

// removes infinite rotating loader svg
export const clearLoader = () => {
    const loader = document.querySelector(`.${elementsStrings.loader}`);

    if(loader){
        loader.parentElement.removeChild(loader);
    }
}


