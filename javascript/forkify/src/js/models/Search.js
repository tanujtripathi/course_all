import axios from 'axios';

/**
 * @method getResults: returns array by consuming from REST API
 */
class Search {

    /**
     * @param {*} query : pizza, pasta etc 
     */
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
            this.results = res.data.recipes;
        } catch (error) {
            console.log(error);
        }

    }
}

export default Search;