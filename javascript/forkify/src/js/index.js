import Search from './models/Search';
import { elements, renderLoader, clearLoader } from './views/base';
import * as searchView from './views/searchView';

const state = {}

// 2.
const controlSearch = async () => {

    // document.querySelector('.search__field').value
    const query = searchView.getInput(); // pizza, pasta

    if (query) {
        // New Search Object
        state.search = new Search(query);

        // clears the typed word in search bar
        searchView.clearInput();

        // clear the previous searched array and set its valut to ''
        // i.e, document.querySelector('.results__list').value = ''
        searchView.clearResults();

        // its an infinite rotating loader
        // elements.results: document.querySelector('.results')
        renderLoader(elements.searchResultsList);

        // Search for recipes
        await state.search.getResults();

        // removes the infinite rotating loader
        clearLoader();

        // Render on UI
        searchView.renderResults(state.search.results);
    }

}

/**
 * 1. users type pizza, pasta in search box and submits
 * @param{elements.searchForm}: document.querySelector('.search')
 */
elements.searchForm.addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
});


elements.searchButtons.addEventListener('click', event => {
    const btn = event.target.closest('.btn-inline');

    if (btn) {
        const gotoPage = parseInt(btn.dataset.goto, 10); //base 10

        searchView.clearResults();
        document.querySelector('.results').value = '';
        document.querySelector('.results__list').value = '';
        document.querySelector('.results__pages').value = '';

        searchView.renderResults(state.search.results, gotoPage);
        console.log(gotoPage)
    }

});