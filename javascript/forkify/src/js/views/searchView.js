import { elements } from './base';

export const getInput = () => elements.searchInput.value;
export const clearInput = () => { elements.searchInput.value = '' };
export const clearResults = () => { elements.searchResultsList.value = '' , elements.searchButtons.value=''};

export const renderRecipe = recipe => {
    const markup = `<li>
    <a class="results__link" href="#${recipe.recipe_id}">
        <figure class="results__fig">
            <img src="${recipe.image_url}" alt="${recipe.title}">
        </figure>
        <div class="results__data">
            <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
            <p class="results__author">${recipe.publisher}</p>
        </div>
    </a>
</li>
`;

    // document.querySelector('.results__list')
    elements.searchResultsList.insertAdjacentHTML('beforeend', markup);
}

/**
 * suppose title: 'Pasta with tomato and spinach'
 * title.length > 7 ? true
 * split ['Pasta', 'with', 'tomato', 'and', spinach']
 * 
 * 1. acc = 0, currentWOrd = 'Pasta', acc + currentWord.length=5 <= limit ? true
 *    newTitle = ['Pasta'], acc = 5
 * 
 * 2. acc = 5, currentWord = 'with' , acc + currentWord.length=9 <= limit ? true
 *    newTitle = ['Pasta', 'with'], acc = 9
 * 
 * 3. acc = 9, currentWord = 'tomato' , acc + currentWord.length = 15 <= limit ? true
 *    newTitle = ['Pasta', 'with', 'tomato'], acc = 15
 * 
 * 4. acc = 15, currentWord = 'and' , acc + currentWord.length = 18 <= limit ? FALSE!!!!
 * after this length will always be greator that 17 so the array above will remains same.
 * 
 */
const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];

    if (title.length > limit) {
        title.split(' ').reduce((acc, currentWord) => {
            if (acc + currentWord.length <= limit) {
                newTitle.push(currentWord);
            }

            // changes value of accumulator i.e, acc
            console.log(acc + currentWord.length)
            return acc + currentWord.length;
        }, 0); // acc is initialized with 0

        return `${newTitle.join(' ')}...`

    }
    return title;
}

/**
 * @param {*} page page number
 * @param {*} type prev or next
 * 
 * This is used to display prev and next button at the end of the rendered results
 */
const createButton = (page, type) => `
<button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
    <svg class="search__icon">
        <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
    </svg>
    <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
</button>
`;

export const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);
    let button;

    if (page === 1 && pages > 1) {
        // Button to go on next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both the next button
        button = `
        ${createButton(page, 'prev')}
        ${createButton(page, 'next')}
       `
    }
    else if (page === pages && pages > 1) {
        // Button to go to previous page
        button = createButton(page, 'prev');
    }

    elements.searchButtons.insertAdjacentHTML('afterbegin', button);

}

export const renderResults = (recipes, page = 1, resultsPerPage = 10) => {
    const start = (page - 1) * resultsPerPage;
    const end = start + resultsPerPage;
    recipes.slice(start, end).forEach(renderRecipe);

    // render buttons
    renderButtons(page, recipes.length, resultsPerPage);
}